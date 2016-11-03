class Movie < ActiveRecord::Base
has_many :comments ,dependent: :destroy 
validates :title, presence: true
validates :rating, presence: true,numericality: { less_than_or_equal_to: 10, greater_than_or_equal_to: 0 }
         
end
