require "rails_helper"

describe "Katia poderá solicitar doador.", type: :feature, js: true do
  context "quando inserir dados corretamente" do
    it "deve ativar o botao" do

      visit "/necessidadeBanco"

      within("#demand_blood_banks_form") do
        fill_in "demand_blood_bank_a_positive", with: "5"
        page.find('#demand_blood_bank_a_positive').trigger(:focusout)
        fill_in "demand_blood_bank_b_positive", with: "5"
        page.find('#demand_blood_bank_a_positive').trigger(:focusout)
        fill_in "demand_blood_bank_a_negative", with: "5"
        page.find('#demand_blood_bank_a_negative').trigger(:focusout)
        fill_in "demand_blood_bank_b_negative", with: "5"
        page.find('#demand_blood_bank_b_negative').trigger(:focusout)
      end

      expect(page).to have_css(".Button.Button--medium.Button--fluid.js-nextButton.is-actived")
    end
  end

  context "quando não inserir dados" do
    it "não deve ativar o botao" do
      visit "/necessidadeBanco"

      expect(page).to have_css(".Button.Button--medium.Button--fluid.is-disabled.js-nextButton")
    end
  end

  context "quando inserir e apagar dados" do
    it "não deve ativar o botao" do
      visit "/necessidadeBanco"

      fill_in "demand_blood_bank_a_positive", with: "5"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)
      fill_in "demand_blood_bank_b_positive", with: "5"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)
      fill_in "demand_blood_bank_a_positive", with: "0"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)
      fill_in "demand_blood_bank_b_positive", with: ""
      page.find('#demand_blood_bank_b_positive').trigger(:focusout)

      expect(page).to have_css(".Button.Button--medium.Button--fluid.is-disabled.js-nextButton")
    end
  end

  context "Quando inserir dados inválidos" do
    it "não deve ativar o botao" do
      visit "/necessidadeBanco"

      fill_in "demand_blood_bank_a_positive", with: "e"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)
      fill_in "demand_blood_bank_b_positive", with: "!"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)
      fill_in "demand_blood_bank_a_negative", with: "&"
      page.find('#demand_blood_bank_a_negative').trigger(:focusout)
      fill_in "demand_blood_bank_b_negative", with: "+"
      page.find('#demand_blood_bank_b_negative').trigger(:focusout)

      expect(page).to have_css(".Button.Button--medium.Button--fluid.is-disabled.js-nextButton")
    end
  end

  context "Quando botao avançar estiver ativado e for clicado" do
    it "deve abrir modal de confirmação" do
      visit "/necessidadeBanco"

      fill_in "demand_blood_bank_a_positive", with: "5"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)

      find(".js-nextButton").click

      expect(page).to have_css(".Modal-confirmation")
    end
  end

  context "Quando botao confirmar for clicado" do
    it "deve abrir modal de mensagem de sucesso" do
      visit "/necessidadeBanco"

      fill_in "demand_blood_bank_a_positive", with: "5"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)

      find(".js-nextButton").click
      find(".Button.Button--fluid.u-size6of12.is-actived.js-modalButton").click

      expect(page).to have_css(".js-modalSuccessMessage")
    end
  end

  context "Quando botao OK for clicado" do
    it "deve redirecionar para tela de necessidade do banco" do
      visit "/necessidadeBanco"

      fill_in "demand_blood_bank_a_positive", with: "5"
      page.find('#demand_blood_bank_a_positive').trigger(:focusout)

      find(".js-nextButton").click
      find(".Button.Button--fluid.u-size6of12.is-actived.js-modalButton").click
      find("#button-OK").click

      expect("").to eq(find("#demand_blood_bank_a_positive").value)
      expect("").to eq(find("#demand_blood_bank_b_positive").value)
      expect("").to eq(find("#demand_blood_bank_ab_positive").value)
      expect("").to eq(find("#demand_blood_bank_o_positive").value)
      expect("").to eq(find("#demand_blood_bank_o_negative").value)
      expect("").to eq(find("#demand_blood_bank_a_negative").value)
      expect("").to eq(find("#demand_blood_bank_ab_negative").value)
      expect("").to eq(find("#demand_blood_bank_b_negative").value)
    end
  end
end
