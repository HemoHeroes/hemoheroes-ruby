Rails.application.routes.draw do

  root 'welcome#index'

  devise_for :users

  resources :addresses
  resources :hospital_necessities
  resources :hospitals

  get '/necessidadehospital', to: 'hospital_necessities#index'


end
