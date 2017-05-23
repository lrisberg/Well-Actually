Rails.application.routes.draw do
  get 'welcome/index'

  post "/api/sources/:id/wins" => "wins#add_win"

  namespace :api do
    resources :sources
  end

  root 'welcome#index'

  get "*any", via: :all, to: "welcome#index"
end
