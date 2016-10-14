class AddIndexCpfToUserBloodDonators < ActiveRecord::Migration[5.0]
  def change
    add_index :user_blood_donators, :cpf, unique: true
  end
end
