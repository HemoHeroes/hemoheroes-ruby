require "rails_helper"

describe "Antônio poderá criar uma conta de doador", type: :feature, js: true do
  context "quando cadastrar com dados corretos" do

    it "deve ativar botão de cadastro" do
      visit "/"
      find(".Button").click
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Lucimar"
          page.find('#user_blood_donator_name').trigger(:focusout)

        fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
          page.find('#user_blood_donator_email').trigger(:focusout)

        # fill_in "user_blood_donator_password", with: "Lucimar"
        #   page.find('#user_blood_donator_password').trigger(:focusout)
        #
        # fill_in "user_blood_donator_password_confirmation", with: "Lucimar"
        #   page.find('#user_blood_donator_password_confirmation').trigger(:focusout)

        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')

      end

      expect(page).to have_button(class: "is-actived")
    end
  end

  context "quando cadastrar com email incorreto" do
    it "deve manter o botao desabilitado" do
      visit "/"
      find(".Button").click
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Lucimar"
          page.find('#user_blood_donator_name').trigger(:focusout)

        fill_in "user_blood_donator_email", with: "Lucimaraceleradora.com"
          page.find('#user_blood_donator_email').trigger(:focusout)

        # fill_in "user_blood_donator_password", with: "Lucimar"
        #   page.find('#user_blood_donator_password').trigger(:focusout)
        #
        # fill_in "user_blood_donator_password_confirmation", with: "Lucimar"
        #   page.find('#user_blood_donator_password_confirmation').trigger(:focusout)

        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')

      end

      expect(page).to have_button(class: "is-disabled")
    end
  end

  context "quando cadastrar com nome incorreto" do
    it "deve manter o botao desabilitado" do
      visit "/"
      find(".Button").click
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: ""
          page.find('#user_blood_donator_name').trigger(:focusout)

        fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
          page.find('#user_blood_donator_email').trigger(:focusout)

        # fill_in "user_blood_donator_password", with: "Lucimar"
        #   page.find('#user_blood_donator_password').trigger(:focusout)
        #
        # fill_in "user_blood_donator_password_confirmation", with: "Lucimar"
        #   page.find('#user_blood_donator_password_confirmation').trigger(:focusout)

        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')
      end
      expect(page).to have_button(class: "is-disabled")
    end
  end
  #
  # context "quando cadastrar com senhas diferentes" do
  #   it "deve manter o botao desabilitado" do
  #     visit "/"
  #     find(".Button").click
  #     within("#form-registration-blood-donator") do
  #       fill_in "user_blood_donator_name", with: "Lucimar123"
  #         page.find('#user_blood_donator_name').trigger(:focusout)
  #
  #       fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
  #         page.find('#user_blood_donator_email').trigger(:focusout)
  #
  #       fill_in "user_blood_donator_password", with: "Lucimar"
  #         page.find('#user_blood_donator_password').trigger(:focusout)
  #
  #       fill_in "user_blood_donator_password_confirmation", with: "Mathias"
  #         page.find('#user_blood_donator_password_confirmation').trigger(:focusout)
  #
  #       select("A+", from: "user_blood_donator_blood_type")
  #       find_by_id("accept_terms").trigger('click')
  #
  #     end
  #
  #     expect(page).to have_content("Senhas não correspondem")
  #     expect(page).to have_button(class: "is-disabled")
  #   end
  # end

  # context "quando cadastrar com senhas menor que 6 caracteres" do
  #   it "deve manter o botao desabilitado" do
  #     visit "/"
  #     find(".Button").click
  #     within("#form-registration-blood-donator") do
  #       fill_in "user_blood_donator_name", with: "Lucimar123"
  #         page.find('#user_blood_donator_name').trigger(:focusout)
  #
  #       fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
  #         page.find('#user_blood_donator_email').trigger(:focusout)
  #
  #       fill_in "user_blood_donator_password", with: "Luci"
  #         page.find('#user_blood_donator_password').trigger(:focusout)
  #
  #       fill_in "user_blood_donator_password_confirmation", with: "Luci"
  #         page.find('#user_blood_donator_password_confirmation').trigger(:focusout)
  #
  #       select("A+", from: "user_blood_donator_blood_type")
  #       find_by_id("accept_terms").trigger('click')
  #
  #     end
  #
  #     expect(page).to have_content("Senha deve ter no minimo 6 digitos!")
  #     expect(page).to have_button(class: "is-disabled")
  #   end
  # end

  context "quando cadastrar com senhas menor que 6 caracteres" do
    it "deve manter o botao desabilitado" do
      visit "/"
      find(".Button").click
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Lucimar123"
          page.find('#user_blood_donator_name').trigger(:focusout)

        fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
          page.find('#user_blood_donator_email').trigger(:focusout)

        # fill_in "user_blood_donator_password", with: "Lucimar"
        #   page.find('#user_blood_donator_password').trigger(:focusout)
        #
        # fill_in "user_blood_donator_password_confirmation", with: "Lucimar"
        #   page.find('#user_blood_donator_password_confirmation').trigger(:focusout)

        select("A+", from: "user_blood_donator_blood_type")

      end
      expect(page).to have_button(class: "is-disabled")
    end
  end

end
