Rails.application.routes.draw do

  resources :user_blood_donators
  devise_for :users
  root 'welcome#index'

  resources :addresses
  resources :demand_blood_banks
  resources :user_blood_banks

  get '/necessidadehospital', to: 'demand_blood_banks#index'


  get '/doador', to: 'donators#index'


  # root 'welcome#index'


  # Routes for components in construction
  get '/components', to: 'components#index'

end
