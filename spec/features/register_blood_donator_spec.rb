require "rails_helper"

describe "Antônio poderá criar uma conta de doador", type: :feature, js: true do
  context "quando cadastrar com dados corretos" do

    it "deve ativar botão de cadastro" do
      visit "/"
      find("#registration_button").trigger('click')
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Lucimar"
        page.find('#user_blood_donator_name').trigger(:focusout)
        fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
        page.find('#user_blood_donator_email').trigger(:focusout)
        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')

      end

      sleep 1
      expect(page).to have_button(class: "is-actived")
    end
  end

  context "quando cadastrar com email incorreto" do
    it "deve manter o botao desabilitado" do
      visit "/"
      find("#registration_button").trigger('click')
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Lucimar"
        page.find('#user_blood_donator_name').trigger(:focusout)
        fill_in "user_blood_donator_email", with: "Lucimaraceleradora.com"
        page.find('#user_blood_donator_email').trigger(:focusout)
        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')

      end

      sleep 1
      expect(page).to have_button(class: "is-disabled")
    end
  end

  context "quando não aceitar os termos" do
    it "deve manter o botao desabilitado" do
      visit "/"
      find("#registration_button").trigger('click')
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Rolandinho"
        page.find("#user_blood_donator_name").trigger(:focusout)
        fill_in "user_blood_donator_email", with: "rolandinho@gmail.com"
        page.find("#user_blood_donator_email").trigger(:focusout)

      end

      sleep 1
      expect(page).to have_button(class: "is-disabled")
    end
  end

  context "quando cadastrar com nome incorreto" do
    it "deve manter o botao desabilitado" do
      visit "/"
      find("#registration_button").trigger('click')
      within("#form-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: ""
        page.find('#user_blood_donator_name').trigger(:focusout)
        fill_in "user_blood_donator_email", with: "Lucimar@aceleradora.com"
        page.find('#user_blood_donator_email').trigger(:focusout)
        select("A+", from: "user_blood_donator_blood_type")
        find_by_id("accept_terms").trigger('click')
      end

      sleep 1
      expect(page).to have_button(class: "is-disabled")
    end
  end

  context "quando clicar em cadastrar" do
    it "deve abrir a modal de confirmação" do
      visit "/"
      find("#registration_button").trigger('click')
      within("#modal-registration-blood-donator") do
        fill_in "user_blood_donator_name", with: "Fellipe Callegas"
        page.find("#user_blood_donator_name").trigger(:focusout)
        fill_in "user_blood_donator_email", with: "callegas.puts@gmail.com"
        page.find("#user_blood_donator_email").trigger(:focusout)
        find_by_id("accept_terms").trigger('click')
        find(".is-actived").trigger('click')
      end

      sleep 1
      expect(page).to have_css(".js-modalSuccessMessage")

    end
  end

end
