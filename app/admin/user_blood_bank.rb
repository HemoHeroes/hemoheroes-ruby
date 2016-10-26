ActiveAdmin.register UserBloodBank do


  index do
    id_column
    column :email
    column :name
    column :cnpj
    actions
  end


permit_params :name, :email, :cnpj, :password, :phone, :lat, :long, :address, :extension, :actived

end
