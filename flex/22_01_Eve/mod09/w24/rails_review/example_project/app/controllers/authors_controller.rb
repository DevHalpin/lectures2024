class AuthorsController < ApplicationController
    def index
        @authors = Author.all
        # render json: @authors
    end

    def show
       @author = Author.find(params[:id]) 
    end
end
