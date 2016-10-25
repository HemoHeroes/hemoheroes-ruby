Rails.application.routes.draw do

  resources :demand_blood_banks

  devise_for :user_blood_donators, :skip => [:sessions, :registrations]
  as :user_blood_donator do
    post 'login' => 'sessions#create', :as => :user_blood_donator_session
    delete 'logout' => 'devise/sessions#destroy', :as => :destroy_user_blood_donator_session

    get 'cadastroDoador' => 'user_blood_donators/registrations#new' , :as => :new_user_blood_donator_registration
    post 'cadastroDoador' => 'user_blood_donators/registrations#create' , :as => :user_blood_donator_registration

    # =newPrototipo
    # Routes for tests new user_blood_donators/registrations/form_v2
     get 'cadastroDoador2' => 'user_blood_donators#newPrototipo'
  end

  devise_for :user_blood_banks, :skip => [:sessions, :registrations]
  as :user_blood_bank do
    post 'login' => 'sessions#create', :as => :user_blood_bank_session
    delete 'logout' => 'devise/sessions#destroy', :as => :destroy_user_blood_bank_session

    get 'cadastroBanco' => 'user_blood_banks/registrations#new' , :as => :new_user_blood_bank_registration
    post 'cadastroBanco' => 'user_blood_banks/registrations#create' , :as => :user_blood_bank_registration
  end

  #get '/dashboard', to: 'welcome#index', :as => :dashboard
  get '/necessidadeBanco', to: 'demand_blood_banks#new', :as => :necessidadeBanco
  get '/dashboard', to: 'welcome#index', :as => :dashboard
  root 'application#index'

  # Routes for components in construction
  get '/components', to: 'components#index'


end
