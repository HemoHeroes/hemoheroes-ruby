require "rails_helper"

describe "Antônio poderá informar que já dppi sangue" do

  before(:all) do
    UserBloodDonator.create! :name => 'Pedrao dos Login',
      :email => 'cristianferreira_gks@hotmail.com',
      :password => '123456', :password_confirmation => '123456',
      :cpf => '12345678912', :blood_type => 'O-', :notification => true,
      :genre => 'm'
  end

  context "Quando clicar em link Doei Ultimamente" do
    it "deve aparecer modal de Ja Doei" do
      user = UserBloodDonator.last
      user.last_donation_token = 1
      token = user.last_donation_token
      url = "/madeDonation/" + token
      visit url
      expect(page).to have_css(".Modal.js-modal.js-modalSuccessMessage.Modal-overlay")
      expect(page).to have_css(".Button.Button--feedback.u-margin-top-medium.is-actived")
    end
  end

  # context "Quando clicar em SIM dentro da modal" do
  #   it "deve aparecer a modal de feedback" do
  #     user = UserBloodDonator.last
  #     user.last_donation_token = 1
  #     token = user.last_donation_token
  #     url = "/madeDonation/" + token
  #     visit url
  #     within("#modal_feedback") do
  #       find(".Button.Button--feedback.u-margin-top-medium.is-actived").trigger('click')
  #     end
  #     within("#modal_feedback")do
  #       expect(page).to have_content("Obrigado pela sua contribuição.")
  #     end
  #   end
  # end
end
