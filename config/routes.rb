Rails.application.routes.draw do
  get 'welcome/index'

  # the following lines match the method to the url and then go to the Wins controller, then run the function
  post "/api/sources/:id/wins" => "wins#add_win"
  delete "/api/sources/:id/lose_friend" => "wins#lose_friend"

  namespace :api do
    resources :sources
  end

  root 'welcome#index'

  get "*any", via: :all, to: "welcome#index"
end
