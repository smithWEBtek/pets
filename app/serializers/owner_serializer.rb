class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :city
	has_many :cats
	has_many :dogs
end
