class OwnersController < ApplicationController
	before_action :set_owner, only: [:show, :edit, :update, :destroy]
 
	def index
		@owners = Owner.all
		@cats = Cat.all
		@dogs = Dog.all
		respond_to do |f|
			f.html { render :index }
			f.json { render json: @owners}
		end		
	end

	def show
		respond_to do |f|
			f.html { render :show }
			f.json { render json: @owner}
		end	
	end

	def new
		@owner = Owner.new
	end

	def create
		@owner = Owner.new(owner_params)
		if @owner.save
			respond_to do |f|
				f.html { redirect_to owner_path(@owner)}
				f.json { render json: @owner}
			end
		else
			render :new
		end
	end

	def edit
	end

	def update
		@owner = Owner.find(params[:id])
	end

	def destroy
	end

	private
		def set_owner
			@owner = Owner.find(params[:id])
		end

		def owner_params
			params.require(:owner).permit(:name, :city)
		end

end
