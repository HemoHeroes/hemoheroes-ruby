class CreateDemandBloodBanks < ActiveRecord::Migration[5.0]
  def change
    create_table :demand_blood_banks do |t|
      t.integer :a_positive
      t.integer :a_negative
      t.integer :b_positive
      t.integer :b_negative
      t.integer :ab_positive
      t.integer :ab_negative
      t.integer :o_positive
      t.integer :o_negative
    end
  end
end
