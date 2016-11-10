require 'rails_helper'

describe NotificationMailer, type: :mailer do

  before(:all) do
    @user = UserBloodDonator.new(name: 'Usuário De Teste', email: 'usuario@gmail.com', password: '123456', password_confirmation: '123456')
    @mail = NotificationMailer.send_email_new_user(@user).deliver_now
  end


  describe '#send_email_new_user' do
    it 'deve retornar o conteúdo do texto' do
      expect(@mail.subject).to eq("Bem vindo ao HemoHeroes")
    end

    it 'deve retornar o email do destinatário' do
      expect(@mail.to).to eq(["usuario@gmail.com"])
    end

    it 'deve retornar o email do remetente ' do
      expect(@mail.from).to eq(["aceleradora10@gmail.com"])
    end
  end
end
