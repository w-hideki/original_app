Rails.application.routes.draw do
  get 'stocks/index'
  devise_for :users
  root to: "portfolios#index"
  resources :stocks
end
