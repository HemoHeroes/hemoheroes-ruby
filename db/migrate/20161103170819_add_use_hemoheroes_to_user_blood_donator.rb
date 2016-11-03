class AddUseHemoheroesToUserBloodDonator < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_donators, :use_hemoheroes, :integer
  end
end
