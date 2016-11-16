class ApplicationController < ActionController::Base
  def index
    @banks = UserBloodBank.where(actived:true)
  end
end
