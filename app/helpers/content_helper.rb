module ContentHelper

  def resource_name
    :user_blood_donator
  end

  def resource
    @resource ||= UserBloodDonator.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user_blood_donator]
  end

end
