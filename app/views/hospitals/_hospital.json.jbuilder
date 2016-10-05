json.extract! hospital, :id, :name, :email, :cnpj, :password, :cep, :street, :district, :number, :city, :state, :created_at, :updated_at
json.url hospital_url(hospital, format: :json)