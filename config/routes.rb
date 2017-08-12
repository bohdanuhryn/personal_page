Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :projects
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'pages/home'

  root 'pages#home'
end
