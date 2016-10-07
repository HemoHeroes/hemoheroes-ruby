class DonatorsController < ApplicationController
  before_action :set_donator, only: [:show, :edit, :update, :destroy]

  # GET /donators
  # GET /donators.json
  def index
    @donators = Donator.all
  end

  # GET /donators/1
  # GET /donators/1.json
  def show
  end

  # GET /donators/new
  def new
    @donator = Donator.new
  end

  # GET /donators/1/edit
  def edit
  end

  # POST /donators
  # POST /donators.json
  def create
    @donator = Donator.new(donator_params)

    respond_to do |format|
      if @donator.save
        format.html { redirect_to @donator, notice: 'Donator was successfully created.' }
        format.json { render :show, status: :created, location: @donator }
      else
        format.html { render :new }
        format.json { render json: @donator.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /donators/1
  # PATCH/PUT /donators/1.json
  def update
    respond_to do |format|
      if @donator.update(donator_params)
        format.html { redirect_to @donator, notice: 'Donator was successfully updated.' }
        format.json { render :show, status: :ok, location: @donator }
      else
        format.html { render :edit }
        format.json { render json: @donator.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /donators/1
  # DELETE /donators/1.json
  def destroy
    @donator.destroy
    respond_to do |format|
      format.html { redirect_to donators_url, notice: 'Donator was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donator
      @donator = Donator.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def donator_params
      params.require(:donator).permit(:name, :date_birth, :cpf, :street, :district, :number, :city, :state, :cep, :email, :phone, :password, :blood_type, :admin, :receive_notification, :last_donation)
    end
end
