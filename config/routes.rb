Rails.application.routes.draw do
    namespace :api do
      resources :users do 
        resources :goals 
        resources :action_items

      

    #   #User 
    # get "/users", to: "users#index", as: "users"
    # post "/users", to: "users#create" 
    # get "/users/:id", to: "users#show", as: "user"
    # patch "/users/:id", to: "users#update"
    # delete "/users/:id", to: "users#destroy"


    # #Goals 
    # get "/users/:id/goals", to: "goals#index", as: "goals"


        
      end     
end
end 
