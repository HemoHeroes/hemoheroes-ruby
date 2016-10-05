json.extract! hospital, :id, :name, :phone, :email, :cnpj, :password, :created_at, :updated_at
json.url hospital_url(hospital, format: :json)