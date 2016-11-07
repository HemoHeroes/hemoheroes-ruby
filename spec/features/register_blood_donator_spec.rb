require "rails_helper"

describe "Antônio poderá criar uma conta de doador", type: :feature, js: true do
  context "cadastro com dados corretos" do

    it "deve ativar botão de cadastro" do
      visit "/"
      find(".Button").click
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Lucimar"
          page.find('#user_blood_donator_name').trigger(:focusout)

        fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
          page.find('#user_blood_donator_email').trigger(:focusout)

        fill_in "user_blood_donator_password", with: "Lucimar"
          page.find('#user_blood_donator_password').trigger(:focusout)

        fill_in "user_blood_donator_password_confirmation", with: "Lucimar"
          page.find('#user_blood_donator_password_confirmation').trigger(:focusout)

        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')

      end

      expect(page).to have_button(class: "is-actived")
    end

  end
end
