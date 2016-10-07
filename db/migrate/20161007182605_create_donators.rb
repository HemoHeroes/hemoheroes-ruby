class CreateDonators < ActiveRecord::Migration[5.0]
  def change
    create_table :donators do |t|
      t.string :name
      t.date :date_birth
      t.string :cpf
      t.string :street
      t.string :district
      t.string :number
      t.string :city
      t.string :state
      t.string :cep
      t.string :email
      t.string :phone
      t.string :password
      t.string :blood_type
      t.boolean :admin
      t.boolean :receive_notification
      t.date :last_donation

      t.timestamps
    end
  end
end
