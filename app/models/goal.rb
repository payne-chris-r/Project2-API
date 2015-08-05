class Goal < ActiveRecord::Base
  belongs_to :user, inverse_of: :goals

  validates :user, presence: true
end
