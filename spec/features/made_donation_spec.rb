require "rails_helper"

describe "Antônio poderá informar que já doou sangue", type: :feature, js: true do

  context "Quando clicar em link Doei Ultimamente" do
    it "deve aparecer modal de Ja Doei" do
      token = 1
      url = "/madeDonation/" + token.to_s
      visit url
      expect(page).to have_css(".Modal.js-modalSuccessMessage")
      expect(page).to have_css(".Button.Button--feedback.u-margin-top-medium")
    end
  end

  context "Quando clicar em SIM dentro da modal" do
    it "deve aparecer a modal de feedback" do
      token = 1
      url = "/madeDonation/" + token.to_s
      visit url
      within("#modal_feedback") do
        find("#feedback_yes_button").trigger('click')
      end
        expect(page).to have_content("Obrigado pela sua contribuição.")
    end
  end

  context "Quando clicar em SIM dentro da modal" do
    it "deve aparecer a modal de feedback" do
      token = 1
      url = "/madeDonation/" + token.to_s
      visit url
      within("#modal_feedback") do
        find("#feedback_no_button").trigger('click')
      end
        expect(page).to have_no_content("Obrigado pela sua contribuição.")
    end
  end

end
