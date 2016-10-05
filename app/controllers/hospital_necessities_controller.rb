class HospitalNecessitiesController < ApplicationController
  before_action :set_hospital_necessity, only: [:show, :edit, :update, :destroy]

  # GET /hospital_necessities
  # GET /hospital_necessities.json
  def index
    @hospital_necessities = HospitalNecessity.all
  end

  # GET /hospital_necessities/1
  # GET /hospital_necessities/1.json
  def show
  end

  # GET /hospital_necessities/new
  def new
    @hospital_necessity = HospitalNecessity.new
  end

  # GET /hospital_necessities/1/edit
  def edit
  end

  # POST /hospital_necessities
  # POST /hospital_necessities.json
  def create
    @hospital_necessity = HospitalNecessity.new(hospital_necessity_params)

    respond_to do |format|
      if @hospital_necessity.save
        format.html { redirect_to @hospital_necessity, notice: 'Hospital necessity was successfully created.' }
        format.json { render :show, status: :created, location: @hospital_necessity }
      else
        format.html { render :new }
        format.json { render json: @hospital_necessity.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hospital_necessities/1
  # PATCH/PUT /hospital_necessities/1.json
  def update
    respond_to do |format|
      if @hospital_necessity.update(hospital_necessity_params)
        format.html { redirect_to @hospital_necessity, notice: 'Hospital necessity was successfully updated.' }
        format.json { render :show, status: :ok, location: @hospital_necessity }
      else
        format.html { render :edit }
        format.json { render json: @hospital_necessity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hospital_necessities/1
  # DELETE /hospital_necessities/1.json
  def destroy
    @hospital_necessity.destroy
    respond_to do |format|
      format.html { redirect_to hospital_necessities_url, notice: 'Hospital necessity was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hospital_necessity
      @hospital_necessity = HospitalNecessity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hospital_necessity_params
      params.require(:hospital_necessity).permit(:a_positive, :a_negative, :b_positive, :b_negative, :ab_positive, :ab_negative, :o_positive, :o_negative)
    end
end
