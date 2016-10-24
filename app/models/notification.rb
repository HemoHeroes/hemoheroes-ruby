class Notification < ApplicationRecord
  has_and_belongs_to_many :user_blood_donators
  has_and_belongs_to_many :demand_blood_banks
end
