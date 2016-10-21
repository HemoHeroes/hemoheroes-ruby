class DemandBloodBanksController < ApplicationController
  before_action :set_demand_blood_bank, only: [:show, :edit, :update, :destroy]

  # GET /demand_blood_banks
  # GET /demand_blood_banks.json
  def index
    @demand_blood_banks = DemandBloodBank.all
  end

  # GET /demand_blood_banks/1
  # GET /demand_blood_banks/1.json
  def show
  end

  # GET /demand_blood_banks/new
  def new
    @demand_blood_bank = DemandBloodBank.new
    @lastUpdateNecessity = DemandBloodBank.last.updated_at
  end

  # GET /demand_blood_banks/1/edit
  def edit
  end

  # POST /demand_blood_banks
  # POST /demand_blood_banks.json
  def create
    @demand_blood_bank = DemandBloodBank.new(demand_blood_bank_params)
    respond_to do |format|
      if @demand_blood_bank.save
        NotificationMailer.send_email_to_donators(@demand_blood_bank).deliver_now
        format.html { redirect_to @demand_blood_bank, notice: 'Hospital necessity was successfully created.' }
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
        format.html { redirect_to @demand_blood_bank, notice: 'Hospital necessity was successfully updated.' }
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
end
