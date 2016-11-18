# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# user_donator = UserBloodDonator.create! :name => 'Doador A+',
                                          # :email => 'matheus.mvo10@gmail.com',
                                          # :password => '123456', :password_confirmation => '123456',
                                          # :cpf => '12345678332', :blood_type => 'A+', :notification => false,
                                          # :genre => 'm', :last_donation => DateTime.current - 100.days

# user_donator = UserBloodDonator.create! :name => 'Doador O-',
                                          # :email => 'mathias_v94@hotmail.com',
                                          # :password => '123456', :password_confirmation => '123456',
                                          # :cpf => '33335678912', :blood_type => 'O-', :notification => true,
                                          # :genre => 'f', :last_donation => DateTime.current - 75.days

# user_donator = UserBloodDonator.create! :name => 'Doador O-',
                                          # :email => 'mathiasvoelcker@gmail.com',
                                          # :password => '123456', :password_confirmation => '123456',
                                          # :cpf => '14432678912', :blood_type => 'O-', :notification => true,
                                          # :genre => 'm', :last_donation => DateTime.current - 75.days

# user_donator = UserBloodDonator.create! :name => 'Doador B-',
                                          # :email => 'mathias.voelcker@acad.pucrs.br',
                                          # :password => '123456', :password_confirmation => '123456',
                                          # :cpf => '12366678912', :blood_type => 'B-', :notification => true,
                                          # :genre => 'm', :last_donation => DateTime.current - 20.days

user_donator = UserBloodDonator.create! :name => 'Pedrao dos Login',
                                                                                  :email => 'cristianferreira_gks@hotmail.com',
                                                                                  :password => '123456', :password_confirmation => '123456',
                                                                                  :cpf => '12345678912', :blood_type => 'O-', :notification => true,
                                                                                  :genre => 'm', :last_donation => DateTime.current - 100.days

user_donator = UserBloodDonator.create! :name => 'Doador A-',
                                        :email => 'sheilanara.web@gmail.com',
                                        :password => '123456', :password_confirmation => '123456',
                                        :cpf => '12345678911', :blood_type => 'A-', :notification => true,
                                        :genre => 'f', :last_donation => DateTime.current - 100.days


user_donator = UserBloodDonator.create! :name => 'Doador A+',
                                        :email => 'lucasgaspari1998@gmail.com',
                                        :password => '123456', :password_confirmation => '123456',
                                        :cpf => '12345623452', :blood_type => 'A+', :notification => true,
                                        :genre => 'm', :last_donation => DateTime.current - 100.days

user_donator = UserBloodDonator.create! :name => 'Doador AB-',
                                        :email => 'callegas.f@gmail.com',
                                        :password => '123456', :password_confirmation => '123456',
                                        :cpf => '12348878912', :blood_type => 'AB-', :notification => true,
                                        :genre => 'm', :last_donation => DateTime.current - 100.days

user_donator = UserBloodDonator.create! :name => 'Doador O+',
                                        :email => 'irlatrevisan@gmail.com',
                                        :password => '123456', :password_confirmation => '123456',
                                        :cpf => '12376858912', :blood_type => 'O+', :notification => true,
                                        :genre => 'f', :last_donation => DateTime.current - 100.days

user_donator = UserBloodDonator.create! :name => 'Doador B+',
                                        :email => 'leonarrangel@gmail.com',
                                        :password => '123456', :password_confirmation => '123456',
                                        :cpf => '12345672312', :blood_type => 'B+', :notification => true,
                                        :genre => 'm', :last_donation => DateTime.current - 100.days


UserBloodBank.create! :name => 'Hemocentro',
                      :email => 'hemorgs-adm@fepps.rs.gov.br',
                      :password => '123456', :password_confirmation => '123456',
                      :cnpj => '00689359000118', :actived => true,
                      :address => "Av. Bento Gonçalves, 3722 - Partenon, Porto Alegre"

UserBloodBank.create! :name => 'Hospital São Lucas',
                      :email => 'contato@saolucas.br',
                      :password => '123456', :password_confirmation => '123456',
                      :cnpj => '11111111111111', :actived => true,
                      :address => "Av. Ipiranga, 6690 - Partenon, Porto Alegre"


UserBloodBank.create! :name => 'Hospital de Clínicas de Porto Alegre',
                      :email => 'hcpa@hcpa.edu.br',
                      :password => '123456', :password_confirmation => '123456',
                      :cnpj => '11111111112111', :actived => true,
                      :address => "R. Ramiro Barcelos, 2350 - Santa Cecilia, Porto Alegre"


UserBloodBank.create! :name => 'Hospital Conceição',
                      :email => 'ouvidoriaghc@ghc.com.br',
                      :password => '123456', :password_confirmation => '123456',
                      :cnpj => '11111111113111', :actived => true,
                      :address => "Av. Francisco Trein, 596 - Cristo Redentor, Porto Alegre"


DemandBloodBank.create! a_positive: 12, ab_positive:5

AdminUser.create!(email: 'pedraoativado@admin.com', password: '123456', password_confirmation: '123456')
