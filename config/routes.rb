Rails.application.routes.draw do
  get 'welcome/index'

  namespace :api do
    resources :sources
  end

  root 'welcome#index'

  get "*any", via: :all, to: "welcome#index"
end
