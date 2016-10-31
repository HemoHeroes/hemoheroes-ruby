# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_donator = UserBloodDonator.create! :name => 'Pedrao dos Login', :email => 'cristianferreira_gks@hotmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12345678912', :blood_type => 'O-', :notification => true, :genre => 'm', :last_donation => DateTime.now - 100.days
user_donator = UserBloodDonator.create! :name => 'Doador A+', :email => 'matheus.mvo10@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12345678332', :blood_type => 'A+', :notification => false, :genre => 'm', :last_donation => DateTime.now - 100.days
user_donator = UserBloodDonator.create! :name => 'Doador A-', :email => 'sheilanara.web@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12345678911', :blood_type => 'A-', :notification => true, :genre => 'f', :last_donation => DateTime.now - 100.days
user_donator = UserBloodDonator.create! :name => 'Doador B-', :email => 'mathias.voelcker@acad.pucrs.br', :password => '123456', :password_confirmation => '123456', :cpf => '12366678912', :blood_type => 'B-', :notification => true, :genre => 'm', :last_donation => DateTime.now - 20.days
user_donator = UserBloodDonator.create! :name => 'Doador AB+', :email => 'lucas1998@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12345623452', :blood_type => 'AB+', :notification => true, :genre => 'm', :last_donation => DateTime.now - 100.days
user_donator = UserBloodDonator.create! :name => 'Doador AB-', :email => 'callegas.f@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12348878912', :blood_type => 'AB-', :notification => true, :genre => 'm', :last_donation => DateTime.now - 100.days
user_donator = UserBloodDonator.create! :name => 'Doador O+', :email => 'irlatrevisan@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12376858912', :blood_type => 'O+', :notification => true, :genre => 'f', :last_donation => DateTime.now - 100.days
user_donator = UserBloodDonator.create! :name => 'Doador O-', :email => 'mathias_v94@hotmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '33335678912', :blood_type => 'O-', :notification => true, :genre => 'f', :last_donation => DateTime.now - 75.days
user_donator = UserBloodDonator.create! :name => 'Doador O-', :email => 'mathiasvoelcker@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '14432678912', :blood_type => 'O-', :notification => true, :genre => 'm', :last_donation => DateTime.now - 75.days
user_donator = UserBloodDonator.create! :name => 'Doador B+', :email => 'leonarrangel@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12345672312', :blood_type => 'B+', :notification => true, :genre => 'm', :last_donation => DateTime.now - 100.days

user_bank = UserBloodBank.create! :name => 'Pedrao dos Banco', :email => 'pedrao@admin.com', :password => '123456', :password_confirmation => '123456', :cnpj => '12345678912345', :actived => false
user_bank_actived = UserBloodBank.create! :name => 'Pedrao dos Banco', :email => 'pedraoativado@admin.com', :password => '123456', :password_confirmation => '123456', :cnpj => '12345678912311', :actived => true

DemandBloodBank.create! a_positive: 12, ab_positive:5

puts "Doador criado com cpf: #{user_donator.cpf} e senha 123456"
puts "Banco Desativado criado com cnpj: #{user_bank.cnpj} e senha 123456"
puts "Banco Ativado criado com cnpj: #{user_bank_actived.cnpj} e senha 123456"
AdminUser.create!(email: 'pedraoativado@admin.com', password: '123456', password_confirmation: '123456')
