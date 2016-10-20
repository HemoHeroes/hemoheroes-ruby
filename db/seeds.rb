# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_donator = UserBloodDonator.create! :name => 'Pedrao dos Login', :email => 'gasparilucas1998@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12345678912'
user_bank = UserBloodBank.create! :name => 'Pedrao dos Banco', :email => 'pedrao@admin.com', :password => '123456', :password_confirmation => '123456', :cnpj => '12345678912345', :actived => false
user_bank_actived = UserBloodBank.create! :name => 'Pedrao dos Banco', :email => 'pedraoativado@admin.com', :password => '123456', :password_confirmation => '123456', :cnpj => '12345678912311', :actived => true

DemandBloodBank.create! a_positive: 12, ab_positive:5

puts "Doador criado com cpf: #{user_donator.cpf} e senha 123456"
puts "Banco Desativado criado com cnpj: #{user_bank.cnpj} e senha 123456"
puts "Banco Ativado criado com cnpj: #{user_bank_actived.cnpj} e senha 123456"
