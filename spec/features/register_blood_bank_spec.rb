# require "rails_helper"
#
# describe "Kátia poderá criar conta de banco de sangue", type: :feature, js: true do
#   context "cadastro com dados corretos" do
#
#     it "deve aparecer uma modal com mensagem de sucesso" do
#       visit "/cadastroBanco"
#
#       within("#new_user_blood_bank") do
#         fill_in "user_blood_bank_name", with: "Hospital São Lucas"
#         fill_in "user_blood_bank_cnpj", with: "12345678912345"
#         fill_in "user_blood_bank_email", with: "katia@gmail.com"
#         fill_in "user_blood_bank_phone", with: "5196501068"
#         fill_in "user_blood_bank_address", with: "Av. Ipiranga, 6681"
#         fill_in "user_blood_bank_password", with: "123456"
#         fill_in "user_blood_bank_password_confirmation", with: "123456"
#       end
#
#       click_button "Cadastrar"
#
#       expect(page).to have_content 'Cadastro em analise'
#     end
#
#     context "cadastro com dados incorretos" do
#       it "deve aparecer uma modal com mensagem de erro" do
#         visit "/cadastroBanco"
#
#         within("#new_user_blood_bank") do
#           fill_in "user_blood_bank_name", with: "Hospital São Lucas"
#           fill_in "user_blood_bank_cnpj", with: "12345678912345"
#           fill_in "user_blood_bank_email", with: "katiagmail.com"
#           fill_in "user_blood_bank_phone", with: "5196501068"
#           fill_in "user_blood_bank_address", with: "Av. Ipiranga, 6681"
#           fill_in "user_blood_bank_password", with: "123456"
#           fill_in "user_blood_bank_password_confirmation", with: "123456"
#         end
#
#         click_button "Cadastrar"
#
#         expect(page).not_to have_content 'Cadastro em analise'
#       end
#     end
#
#   end
# end
