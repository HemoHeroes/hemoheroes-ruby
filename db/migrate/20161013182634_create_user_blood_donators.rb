class CreateUserBloodDonators < ActiveRecord::Migration[5.0]
  def change
    create_table :user_blood_donators do |t|
      t.string :name
      t.date :date_birth
      t.string :cpf
      t.string :email
      t.string :phone
      t.string :password
      t.string :blood_type
      t.boolean :admin
      t.date :last_donation
      t.string :genre
      t.boolean :notification
      t.string :lat
      t.string :long
      t.string :cep
    end
  end
end
