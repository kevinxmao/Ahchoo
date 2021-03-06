Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create, :update]
    resources :holdings, only: [:index, :show, :create, :update, :destroy]
    resources :tickers, only: [:index, :show]
    resources :watchlists, only: [:index, :show, :create, :update, :destroy]
  end
end