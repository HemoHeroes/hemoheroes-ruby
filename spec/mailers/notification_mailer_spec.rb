require 'rails_helper'

describe NotificationMailer, type: :mailer do

  before(:all) do
    @user = UserBloodDonator.new(name: 'Usuário De Teste',
    email: 'usuario@gmail.com',
    password: '123456',
    password_confirmation: '123456',
    last_donation_token: "muitobom",
    notification_token: "muitobommesmo"
    )
    @user_bank = UserBloodBank.new(:name => 'Pedrao dos Banco',
    :email => 'pedraoativado@admin.com',
    :password => '123456',
    :password_confirmation => '123456',
    :cnpj => '12345678912311',
    :actived => true,
    :address => "Largo Jornalista Glenio Peres - Porto Alegre")

    @mail = NotificationMailer.send_email_new_user(@user).deliver_now
    @mailToAdmin = NotificationMailer.send_notification_to_admin @user_bank
    @mailDemand = NotificationMailer.send_email(@user, @user_bank)
    @mailNoBloodType = NotificationMailer.send_email_no_blood_type_donator(@user)
  end


  describe '#send_email_new_user' do
    it 'retorna o conteúdo do texto' do
      expect(@mail.subject).to eq("Bem vindo ao HemoHeroes")
    end

    it 'retorna o email do destinatário doador' do
      expect(@mail.to).to eq([@user.email])
    end

    it 'retorna o email do remetente' do
      expect(@mail.from).to eq(["aceleradora10@gmail.com"])
    end
  end

  describe '#send_email' do
    it 'retorna o conteúdo do texto' do
      expect(@mailDemand.subject).to eq("Teste implementação")
    end
    it 'retorna o conteúdo do texto' do
      expect(@mailDemand.to).to eq([@user.email])
    end
    it 'retorna o conteúdo do texto' do
      expect(@mailDemand.from).to eq(["aceleradora10@gmail.com"])
    end

  end

  describe '#send_notification_to_admin' do
    it 'retorna o conteudo do texto' do
      expect(@mailToAdmin.subject).to eq("Validar cadastro de novo banco de sangue")
    end

    it 'retorna o email para admin' do
      expect(@mailToAdmin.to).to eq(["aceleradora10@gmail.com"])
    end

    it 'retorna email do admin' do
      expect(@mailToAdmin.from).to eq(["aceleradora10@gmail.com"])
    end
  end

  describe '#send_no_blood_type_donator' do
    it 'retorna o conteúdo do texto' do
      expect(@mailNoBloodType.subject).to eq('Convite para doação')
    end

    it 'retorna o email do destinatário doador' do
      expect(@mailNoBloodType.to).to eq([@user.email])
    end

    it 'retorna email do admin' do
      expect(@mailNoBloodType.from).to eq(["aceleradora10@gmail.com"])
    end
  end

end
