class CreateUserBloodBanks < ActiveRecord::Migration[5.0]
  def change
    create_table :user_blood_banks do |t|
      t.string :name
      t.string :email
      t.string :cnpj
      t.string :password
      t.string :phone
      t.string :lat
      t.string :long
      t.string :address
      t.string :extension
    end
  end
end
