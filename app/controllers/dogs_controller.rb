class DogsController < ApplicationController
 	before_action :set_dog, only: [:show, :edit, :update, :destroy]
		
	def index
		@dogs = Dog.all
		respond_to do |f|
			f.html { render :index }
			f.json { render json: @dogs}
		end
	end	

	def show
	end

	def new
		@dog = Dog.new
	end

	def create
		@dog = Dog.new(dog_params)
		if @dog.save
			respond_to do |f|
				f.html { redirect_to dog_path(@dog)}
				f.json { render json: @dog}
			end
		else
			render :new
		end
	end

	def edit
	end

	def update
		@dog = Dog.find(params[:id])
	end

	def destroy
	end

	private
		def set_dog
			@dog = Dog.find(params[:id])
		end

		def dog_params
			params.require(:dog).permit(:owner_id, :name, :breed)
		end
end