class UserBloodBank < ApplicationRecord
  validates_presence_of :name, :email, :cnpj, :address

  validates :email, format: {with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i, message: "Formato inválido de email"}
  validates :name, format: {with: /\A[a-zA-Z]+\z/, message: "Somente Letras"}
  validates :cnpj, format: {with: /\A+\d{14}+\z/, message: "Apenas 14 dígitos"}
  
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
