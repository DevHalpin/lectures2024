class GamesController < ApplicationController
	def new
		session[:game] = {
		number: rand(1..100),
		attempts_left: 5,
		state: 'playing'
		}
		redirect_to game_path
	end

	def create
		redirect_to game_path
	end

	def show
		@game = session[:game]
		Rails.logger.debug("Game state: #{@game.inspect}")
	end

	def guess
		@game = session[:game]
		Rails.logger.debug("Game state: #{@game.inspect}")

		# Ensure game data is present and valid
		if @game.nil?
			redirect_to root_path, alert: "Game session not found. Please start a new game."
			return
		end

		guess = params[:guess].to_i
		Rails.logger.debug("Guess: #{guess}")

		if guess == @game['number']
			@game['state'] = 'won'
		else
			@game['attempts_left'] -= 1
			@game['state'] = 'lost' if @game['attempts_left'] <= 0
		end

		session[:game] = @game
		Rails.logger.debug("Updated game state: #{@game.inspect}")

		if @game['state'] != 'playing'
			redirect_to game_result_path
		else
			@feedback = guess > @game['number'] ? 'Too high!' : 'Too low!'
			render :show
		end
	end

	def result
		@game = session[:game]
	end

	def index
		@games = Game.all
	end
end
