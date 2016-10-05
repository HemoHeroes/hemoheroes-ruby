Rails.application.routes.draw do

  resources :addresses
  resources :hospital_necessities
  resources :hospitals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root 'welcome#index'

  get '/necessidadehospital', to: 'hospital_necessities#index'


end
