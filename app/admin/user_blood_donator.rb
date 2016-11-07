ActiveAdmin.register UserBloodDonator do


  index do
    id_column
    column :email
    column :name
    column :cpf
    column :notification
    column :use_hemoheroes
    actions
  end

 permit_params :name, :date_birth, :cpf, :email, :phone, :password, :blood_type,
 :admin, :notification, :last_donation, :cep, :lat, :long, :genre, :use_hemoheroes

end
