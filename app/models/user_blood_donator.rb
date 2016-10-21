class UserBloodDonator < ApplicationRecord
  validates_uniqueness_of :cpf
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  authentication_keys: [:cpf]


  def donate_blood_to(donator_blood_type)
    case (donator_blood_type)
    when "A+"
      can_donate_to = ['O+', 'A+', 'O-', 'A-']
    when "B+"
      can_donate_to = ['O+', 'B+', 'O-', 'B-']
    when "AB+"
      can_donate_to = ['O+', 'A+', 'O-', 'A-', 'B+', 'B-', 'AB+', 'AB-']
    when "O+"
      can_donate_to = ['O+', 'O-']
    when "O-"
      can_donate_to = ['O-']
    when "A-"
      can_donate_to = ['O-', 'A-']
    when "B-"
      can_donate_to = ['O-', 'B-']
    when "AB-"
      can_donate_to = ['O-', 'B-', 'A-', 'AB-']
    end
  end


  def email_required?
    false
  end

  def email_changed?
    false
  end

end
