Rails.application.routes.draw do
  root 'games#new'
  post 'game', to: 'games#create'
  get 'game', to: 'games#show'
  post 'game/guess', to: 'games#guess'
  get 'game/result', to: 'games#result'
  resources :games, only: [:index]
end