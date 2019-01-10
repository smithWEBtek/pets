class CatsController < ApplicationController
before_action :set_cat, only: [:show, :edit, :update, :destroy]
	
	def index
		@cats = Cat.all
		respond_to do |f|
			f.html { render :index }
			f.json { render json: @cats}
		end
	end	

	def show
	end

	def new
		@cat = Cat.new
	end

	def create
		@cat = Cat.new(cat_params)
		if @cat.save
			respond_to do |f|
				f.html { redirect_to cat_path(@cat)}
				f.json { render json: @cat}
			end
		else
			render :new
		end
	end

	def edit
	end

	def update
		@cat = Cat.find(params[:id])
	end

	def destroy
	end

	private
		def set_cat
			@cat = Cat.find(params[:id])
		end

		def cat_params
			params.require(:cat).permit(:owner_id, :name, :breed)
		end
end