class Owner < ApplicationRecord
	has_many :cats
	has_many :dogs
end
