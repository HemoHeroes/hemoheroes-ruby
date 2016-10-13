json.extract! hospital, :id, :name, :email, :cnpj, :password, :created_at, :updated_at, :phone, :lat, :long, :extension
json.url hospital_url(hospital, format: :json)
