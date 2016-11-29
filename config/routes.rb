Rails.application.routes.draw do

  get 'mensagem_de_confirmacao' => 'confirm_to_have_donate#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :demand_blood_banks

  match "/admin/update_passwords" => 'admin/update_passwords#edit', via: :get, as: "admin_update_passwords"

  devise_for :user_blood_donators, :skip => [:sessions, :registrations]
  as :user_blood_donator do
    post 'login' => 'sessions#create', :as => :user_blood_donator_session
    delete 'logout' => 'devise/sessions#destroy', :as => :destroy_user_blood_donator_session

    # get 'cadastroDoador' => 'user_blood_donators/registrations#new' , :as => :new_user_blood_donator_registration
    post 'cadastroDoador' => 'user_blood_donators/registrations#create' , :as => :user_blood_donator_registration

    post 'notificacoes', to: 'user_blood_donators/registrations#active_notification', :as => :user_blood_donator_notification

    get 'madeDonation/:receiveToken', to: 'user_blood_donators/registrations#made_donation', :as => :made_donation

    post 'feedbackDonation' , to: 'user_blood_donators/registrations#feedback_donation' , :as => :feedback_donation
    # =newPrototipo
    # Routes for tests new user_blood_donators/registrations/form_v2

    get 'cancelNotification/:token', to: 'user_blood_donators/registrations#cancel_notification', :as => :cancel_notification


  end

  devise_for :user_blood_banks, :skip => [:sessions, :registrations]
  as :user_blood_bank do
    post 'login' => 'sessions#create', :as => :user_blood_bank_session
    delete 'logout' => 'devise/sessions#destroy', :as => :destroy_user_blood_bank_session

    get 'cadastroBanco' => 'user_blood_banks/registrations#new', :as => :new_user_blood_bank_registration
    post 'cadastroBanco' => 'user_blood_banks/registrations#create' , :as => :user_blood_bank_registration
  end

  get '/dashboard', to: 'application#requisitos', :as => :dashboard
  get '/necessidadeBanco', to: 'demand_blood_banks#new', :as => :necessidadeBanco

  get 'sign_up_confirmation/:receiveToken', to: 'user_blood_donators/registrations#sign_up_confirmation', :as => :sign_up_confirmation
  # get '/user_blood_donators', to: 'welcome/registrations#sign_up_confirmation', :as => :sign_up_confirmation

  root 'application#index'

  # Routes for components in construction
  get '/components', to: 'components#index'

end
