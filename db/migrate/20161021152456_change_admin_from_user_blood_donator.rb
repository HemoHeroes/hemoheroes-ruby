class ChangeAdminFromUserBloodDonator < ActiveRecord::Migration[5.0]
  def change
    change_column_default :user_blood_donators, :admin, false
  end
end
