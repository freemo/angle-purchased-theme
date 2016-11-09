Rails.application.routes.draw do

  # defaults to dashboard
  root :to => redirect('/singleview')
  
  # view routes
  get '/singleview' => 'singleview#index'
  
  # api routes
  get '/api/i18n/:locale' => 'api#i18n'

end
