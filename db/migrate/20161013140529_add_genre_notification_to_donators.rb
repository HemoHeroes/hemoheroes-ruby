class AddGenreNotificationToDonators < ActiveRecord::Migration[5.0]
  def change
    add_column :donators, :genre, :string
    add_column :donators, :notification, :boolean
  end
end
