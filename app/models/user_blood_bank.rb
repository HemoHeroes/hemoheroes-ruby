class UserBloodBank < ApplicationRecord
  validates_presence_of :name, :email, :cnpj, :address

  validates_uniqueness_of :cnpj
  validates_uniqueness_of :email
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  authentication_keys: [:cnpj]

  geocoded_by :address

  after_validation :geocode

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
