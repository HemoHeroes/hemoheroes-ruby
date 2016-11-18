require "rails_helper"

describe NotificationMailer, type: :mailer do

  before(:all) do
    @user_bank = UserBloodBank.new(:name => 'Pedrao dos Banco',
    :email => 'pedraoativado@admin.com',
    :password => '123456',
    :password_confirmation => '123456',
    :cnpj => '12345678912311',
    :actived => false,
    :address => "Largo Jornalista Glenio Peres - Porto Alegre")

    @admin = AdminUser.create!(email: 'pedraoativado@admin.com', password: '123456', password_confirmation: '123456')
    @mail = NotificationMailer.send_activation_email(@user_bank)
  end

  describe '#send_activation_email' do
    it 'retornar o assunto do e-mail' do
      expect(@mail.subject).to eq 'Conta HemoHeroes ativada!'
    end
    it 'retornar o email do destinatário' do
      expect(@mail.to).to eq @user_bank.email
    end
    it 'retornar o email do remetente' do
      expect(@mail.from).to eq 'aceleradora10@gmail.com'
    end
    it 'retornar o conteúdo do e-mail' do
      expect(@mail.template_name).to eq 'blood_bank_activation_email.html.erb'
    end
  end

end
