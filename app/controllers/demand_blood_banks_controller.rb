require 'date'

class DemandBloodBanksController < ApplicationController
  before_action :set_demand_blood_bank, only: [:show, :edit, :update, :destroy]

  # GET /demand_blood_banks
  # GET /demand_blood_banks.json
  def index
    @demand_blood_banks = DemandBloodBank.all
  end

  # GET /demand_blood_banks/1
  # GET /demand_blood_banks/1.json
  # end

  # GET /demand_blood_banks/new
  def new
    @demand_blood_bank = DemandBloodBank.new
    @lastUpdateNecessity = DemandBloodBank.last.updated_at.strftime("%d/%m/%Y - %H:%M:%S")
  
  end

  # GET /demand_blood_banks/1/edit
  def edit
  end

  # POST /demand_blood_banks
  # POST /demand_blood_banks.json
  def create

    @demand_blood_bank = DemandBloodBank.new(demand_blood_bank_params)
    @bank = current_user_blood_bank
    respond_to do |format|
      if @demand_blood_bank.save!

        @donators = UserBloodDonator.where blood_type:(make_demand_array(@demand_blood_bank)), notification:true

        @donators.each do |donator|
          if user_can_recive_email(donator, @demand_blood_bank)
            donator.last_donation_token = SecureRandom.urlsafe_base64.to_s
            donator.notification_token = SecureRandom.urlsafe_base64.to_s
            donator.save!

            response = NotificationMailer.send_email(donator, @bank).deliver_now
            Notification.create! :last_notification => Date.current,
            :appear => false,
            :user_blood_donators_id => donator.id,
            :demand_blood_banks_id => @demand_blood_bank.id
          end
        end
        format.html { }
        format.json { render :show, status: :created, location: @demand_blood_bank }
      else
        format.html { render :new }
        format.json { render json: @demand_blood_bank.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /demand_blood_banks/1
  # PATCH/PUT /demand_blood_banks/1.json
  def update
    respond_to do |format|
      if @demand_blood_bank.update(demand_blood_bank_params)
        format.html { }
        format.json { render :show, status: :ok, location: @demand_blood_bank }
      else
        format.html { render :edit }
        format.json { render json: @demand_blood_bank.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /demand_blood_banks/1
  # DELETE /demand_blood_banks/1.json
  def destroy
    @demand_blood_bank.destroy
    respond_to do |format|
      format.html { redirect_to demand_blood_banks_url, notice: 'Hospital necessity was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_demand_blood_bank
    @demand_blood_bank = DemandBloodBank.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def demand_blood_bank_params
    params.require(:demand_blood_bank).permit(:a_positive, :a_negative, :b_positive, :b_negative, :ab_positive, :ab_negative, :o_positive, :o_negative)
  end

  def user_can_recive_email(user, demand)
    return false unless check_donation_interval user
    return false unless check_last_donation_request user
    true
  end

  def make_demand_array demand
    array = Array.new
    array.push("A+") unless demand.a_positive.nil?
    array.push("A-") unless demand.a_negative.nil?
    array.push("B+") unless demand.b_positive.nil?
    array.push("B-") unless demand.b_negative.nil?
    array.push("AB+") unless demand.ab_positive.nil?
    array.push("AB-") unless demand.ab_negative.nil?
    array.push("O+") unless demand.o_positive.nil?
    array.push("O-") unless demand.o_negative.nil?
    array
  end

  def check_last_donation_request donator
    last_notification = Notification.where(:user_blood_donators_id => donator.id).last
    if last_notification.nil? || (Date.current - last_notification.last_notification).to_i > 7
      return true
    end
    false
  end

  def check_donation_interval donator
    if donator.last_donation == nil
      return true
    end
    difference_in_days = (Date.current - donator.last_donation).to_i
    if donator.genre.downcase == 'm' && difference_in_days > 60
      return true
    elsif donator.genre.downcase == 'f' && difference_in_days > 90
      return true
    end
    false
  end
end
