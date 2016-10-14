Rails.application.routes.draw do

  devise_for :user_blood_donators, controllers: {
    sessions: 'sessions',
    registrations: 'user_blood_donators/registrations'
  }

  devise_for :user_blood_banks, controllers: {
    sessions: 'sessions',
    registrations: 'user_blood_banks/registrations'
  }

  root 'welcome#index'

  get '/necessidadehospital', to: 'demand_blood_banks#index'

  get '/doador', to: 'user_blood_donators#index'

  # get '/unify_login', to: 'session#'

  # Routes for components in construction
  get '/components', to: 'components#index'




end
