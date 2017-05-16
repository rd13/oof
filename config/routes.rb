Rails.application.routes.draw do
  get 'main/index'

  resources :employees
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root 'main#index'
  get '*unmatched_route' => 'main#index'
end
