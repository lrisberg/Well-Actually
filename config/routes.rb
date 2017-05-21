Rails.application.routes.draw do
  get 'welcome/index'

  resources :sources

  root 'welcome#index'
end
