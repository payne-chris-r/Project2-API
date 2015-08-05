class User < ActiveRecord::Base
  has_secure_password

  has_many :runs, inverse_of: :user
  has_many :goals, inverse_of: :user
  has_one :profile, inverse_of: :user

  before_create :set_token

  validates :username, uniqueness: true

  def self.login(username, password)
    user = find_by username: username
    user.login(password) if user
    # user.set_token && user.save! if user
    # user.token if user
  end
  #normally we want these to expire after x days here.

  def login(password)
    authenticate(password) && set_token && save! && token
  end

  private

  def set_token
    self.token = SecureRandom.hex
  end
end
