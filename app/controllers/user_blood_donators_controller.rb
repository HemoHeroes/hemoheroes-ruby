class UserBloodDonatorsController < ApplicationController
  before_action :set_user_blood_donator, only: [:show, :edit, :update, :destroy]

  # GET /user_blood_donators
  # GET /user_blood_donators.json
  def index
    @user_blood_donators = UserBloodDonator.all
  end

  # GET /user_blood_donators/1
  # GET /user_blood_donators/1.json
  def show
  end

  # GET /user_blood_donators/new
  def new
    @user_blood_donator = UserBloodDonator.new
  end

  # GET /user_blood_donators/1/edit
  def edit
  end

  # POST /user_blood_donators
  # POST /user_blood_donators.json
  
  # def create
  #   @user_blood_donator = UserBloodDonator.new(user_blood_donator_params)
  #   respond_to do |format|
  #     if @user_blood_donator.save
  #       format.html { redirect_to @user_blood_donator, notice: 'user_blood_donator was successfully created.' }
  #       format.json { render :show, status: :created, location: @user_blood_donator }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @user_blood_donator.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # PATCH/PUT /user_blood_donators/1
  # PATCH/PUT /user_blood_donators/1.json
  def update
    respond_to do |format|
      if @user_blood_donator.update(user_blood_donator_params)
        format.html { redirect_to @user_blood_donator, notice: 'user_blood_donator was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_blood_donator }
      else
        format.html { render :edit }
        format.json { render json: @user_blood_donator.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_blood_donators/1
  # DELETE /user_blood_donators/1.json
  def destroy
    @user_blood_donator.destroy
    respond_to do |format|
      format.html { redirect_to user_blood_donators_url, notice: 'user_blood_donator was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_blood_donator
      @user_blood_donator = UserBloodDonator.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_blood_donator_params
      params.require(:user_blood_donator).permit(:name, :date_birth, :cpf, :email, :phone, :password, :blood_type, :admin, :notification, :last_donation, :cep, :lat, :long, :genre)
    end
end
