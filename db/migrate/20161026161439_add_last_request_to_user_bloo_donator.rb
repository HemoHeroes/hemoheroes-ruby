class AddLastRequestToUserBlooDonator < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_donators, :last_request, :date
  end
end
