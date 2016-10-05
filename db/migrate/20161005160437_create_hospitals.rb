class CreateHospitals < ActiveRecord::Migration[5.0]
  def change
    create_table :hospitals do |t|
      t.string :name
      t.string :email
      t.string :cnpj
      t.string :password
      t.string :cep
      t.string :street
      t.string :district
      t.string :number
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
