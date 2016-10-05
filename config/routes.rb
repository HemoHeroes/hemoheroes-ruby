Rails.application.routes.draw do

  devise_for :users
  root 'welcome#index'

  resources :addresses
  resources :hospital_necessities
  resources :hospitals

  get '/necessidadehospital', to: 'hospital_necessities#index'


  # root 'welcome#index'


  # Routes for components in construction
  get '/modal', to: 'components#modal'

end
