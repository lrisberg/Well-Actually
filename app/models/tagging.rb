class Tagging < ApplicationRecord
  belongs_to :tag
  belongs_to :source
end
