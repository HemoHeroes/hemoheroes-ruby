json.extract! user_blood_donator, :id, :name, :date_birth, :cpf, :email, :phone, :password, :blood_type, :admin, :notification, :last_donation, :created_at, :updated_at, :lat, :long, :cep
json.url donator_url(user_blood_donator, format: :json)
