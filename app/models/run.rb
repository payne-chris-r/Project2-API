class Run < ActiveRecord::Base
  belongs_to :user, inverse_of: :runs

  validates :user, presence: true
end
