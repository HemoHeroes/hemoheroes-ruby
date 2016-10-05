class CreateHospitals < ActiveRecord::Migration[5.0]
  def change
    create_table :hospitals do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :cnpj
      t.string :password

      t.timestamps
    end
  end
end
