class Tag < ApplicationRecord
  has_many :taggings
  has_many :sources, through: :taggings
end
