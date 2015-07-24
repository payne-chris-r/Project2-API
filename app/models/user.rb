class User < ActiveRecord::Base
  has_secure_password

  before_create :set_token

  validates :email, uniqueness: true

  #normally we want these to expire after x days here.
  def set_token
    self.token = SecureRandom.hex
  end
end
