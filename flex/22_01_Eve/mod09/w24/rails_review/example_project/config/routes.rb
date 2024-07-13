Rails.application.routes.draw do
  resources :publishers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  resources :authors

  # resources :authors, only [:show, :index]
  # resources :authors, except[:edit, :update, :show]

  resources :books

  # get 'profile', to: 'users#show'

  # get 'profile', action: :show, controller: 'users'

  # Defines the root path route ("/")
  # root "posts#index"
end