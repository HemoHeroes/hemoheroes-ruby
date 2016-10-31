class UserBloodDonatorsController < ApplicationController
  before_action :set_user_blood_donator, only: [:show, :edit, :update, :destroy]

  def newPrototipo
    @resourceT = "blood_prototype"
    @user_blood_donator = UserBloodDonator.new
    render 'user_blood_donators/registrations/newPrototipo'
  end

end
