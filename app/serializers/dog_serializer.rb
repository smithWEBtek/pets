class DogSerializer < ActiveModel::Serializer
	attributes :id, :name, :owner_id
	belongs_to :owner
end
