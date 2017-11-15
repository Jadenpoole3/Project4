class Goal < ApplicationRecord
  belongs_to :user
  has_many :action_items, dependent: :destroy
end
