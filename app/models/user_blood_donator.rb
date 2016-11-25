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

  def update_last_donation
    self.last_donation = DateTime.current
    self.last_donation_token = ""
    self.save!
    return self.id
  end

  def add_use_hemoheroes
    if self.use_hemoheroes == nil
      self.use_hemoheroes = 1
    else
      self.use_hemoheroes += 1
    end
    self.save!
  end

end
