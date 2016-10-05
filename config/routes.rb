Rails.application.routes.draw do
<<<<<<< HEAD
  devise_for :users
=======

  resources :addresses
  resources :hospital_necessities
  resources :hospitals
>>>>>>> 4248323af1b77f31fa2ef733ae90139e76cf8cb7
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root 'welcome#index'

  get '/necessidadehospital', to: 'hospital_necessities#index'


end
