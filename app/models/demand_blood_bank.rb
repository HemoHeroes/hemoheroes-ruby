class DemandBloodBank < ApplicationRecord
    has_and_belongs_to_many :notifications
end
