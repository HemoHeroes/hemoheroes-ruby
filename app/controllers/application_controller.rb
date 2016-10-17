class ApplicationController < ActionController::Base
  #before_action :authenticate_user!

  def index
    puts params.inspect
  end

end
