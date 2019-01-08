Rails.application.routes.draw do
  resources :owners
  resources :dogs
	resources :cats
	root to: 'owners#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
