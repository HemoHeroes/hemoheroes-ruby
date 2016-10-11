Rails.application.routes.draw do

  resources :donators
  devise_for :users
  root 'welcome#index'

  resources :addresses
  resources :hospital_necessities
  resources :hospitals

  get '/necessidadehospital', to: 'hospital_necessities#index'


  get '/doador', to: 'donators#index'


  # root 'welcome#index'


  # Routes for components in construction
  get '/components', to: 'components#index'

end
