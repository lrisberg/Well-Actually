class User < ApplicationRecord
# class User < ActiveRecord::Base

# bcrypt
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
