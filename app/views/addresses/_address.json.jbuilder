json.extract! address, :id, :cep, :street, :district, :number, :city, :state, :created_at, :updated_at
json.url address_url(address, format: :json)