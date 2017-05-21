class Source < ApplicationRecord
  validates :title, presence: true
  # validates :link, presence: true
  # validates :abstract, presence: true
  # validates :journal, presence: true
end
