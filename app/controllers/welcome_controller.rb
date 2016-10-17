class WelcomeController < ApplicationController
  protect_from_forgery prepend: true
  devise_group :person, contains: [:user_blood_donator, :user_blood_bank]
  before_action :authenticate_person!
end
