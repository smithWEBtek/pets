class OwnersController < ApplicationController
	before_action :set_owner, only: [:show, :edit, :update, :destroy]
		
		def index
			@owners = Owner.all
		end
	
		def show
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
