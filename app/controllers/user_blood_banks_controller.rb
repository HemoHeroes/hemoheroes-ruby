class UserBloodBanksController < ApplicationController
  before_action :set_user_blood_bank, only: [:show, :edit, :update, :destroy]

  # GET /user_blood_banks
  # GET /user_blood_banks.json
  def index
    @user_blood_banks = UserBloodBank.all
  end

  # GET /user_blood_banks/1
  # GET /user_blood_banks/1.json
  def show
  end

  # GET /user_blood_banks/new
  def new
    @user_blood_bank = UserBloodBank.new
  end

  # GET /user_blood_banks/1/edit
  def edit
  end

  # POST /user_blood_banks
  # POST /user_blood_banks.json
  # def create
  #   @user_blood_bank = UserBloodBank.new(user_blood_bank_params)
  #
  #   respond_to do |format|
  #     if @user_blood_bank.save
  #       format.html { redirect_to @user_blood_bank, notice: 'UserBloodBank was successfully created.' }
  #       format.json { render :show, status: :created, location: @user_blood_bank }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @user_blood_bank.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # PATCH/PUT /user_blood_banks/1
  # PATCH/PUT /user_blood_banks/1.json
  def update
    respond_to do |format|
      if @user_blood_bank.update(user_blood_bank_params)
        format.html { redirect_to @user_blood_bank, notice: 'UserBloodBank was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_blood_bank }
      else
        format.html { render :edit }
        format.json { render json: @user_blood_bank.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_blood_banks/1
  # DELETE /user_blood_banks/1.json
  def destroy
    @user_blood_bank.destroy
    respond_to do |format|
      format.html { redirect_to user_blood_banks_url, notice: 'UserBloodBank was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_blood_bank
      @user_blood_bank = UserBloodBank.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_blood_bank_params
      params.require(:user_blood_bank).permit(:name, :email, :cnpj, :password, :phone, :lat, :long, :address, :extension )
    end
end
