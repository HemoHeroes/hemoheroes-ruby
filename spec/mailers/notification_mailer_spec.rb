require 'rails_helper'

RSpec.describe NotificationMailer, type: :mailer do

  describe 'O sistema deverá enviar notificações' do

    before(:all) do
      @user = UserBloodDonator.new(name: 'Usuário De Teste', email: 'aceleradora10@gmail.com', password: '123456', password_confirmation: '123456')
      @mail = NotificationMailer.send_email_new_user(@user).deliver_now
    end

    context 'instructions' do

      it 'Deve Receber email' do
        expect(@mail.subject).to eq("Bem vindo ao HemoHeroes")
      end

      it 'renders the receiver email' do
        expect(@mail.to).to eq(["aceleradora10@gmail.com"])
      end

      it 'renders the sender email' do
        expect(@mail.from).to eq(["aceleradora10@gmail.com"])
      end
    end
  end
end
