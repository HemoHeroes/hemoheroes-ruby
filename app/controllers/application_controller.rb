class ApplicationController < ActionController::Base
  def index
    @banks = UserBloodBank.all
  end

end
