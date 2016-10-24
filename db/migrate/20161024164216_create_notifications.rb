class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.date :last_notification
      t.boolean :appear

      t.timestamps
    end
  end
end
