class User < ApplicationRecord
    has_many :goals, dependent: :destroy
    has_many :action_items, through: :goals
 
end
