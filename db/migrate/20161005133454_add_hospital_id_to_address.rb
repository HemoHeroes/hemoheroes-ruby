class AddHospitalIdToAddress < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :hospital_id, :integer
  end
end
