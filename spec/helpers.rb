require "rails_helper"

module Helpers

  def login(user)
    find("#login_hemocentro_button").trigger('click')
    sleep(1)
    page.fill_in 'user_blood_donator_document', with: user.cnpj
    page.fill_in 'user_blood_donator_password', with: user.password
    click_button 'Login'
  end

end
