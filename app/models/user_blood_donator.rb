class UserBloodDonator < ApplicationRecord

  has_and_belongs_to_many :notifications
  validates_presence_of :name, :email

  # validates_uniqueness_of :cpf
  validates_uniqueness_of :email

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  authentication_keys: [:cpf]

  def email_required?
    false
  end

  def email_changed?
    false
  end

end
