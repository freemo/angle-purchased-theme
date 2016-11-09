class ApiController < ActionController::Base
  
  def i18n
    # locale param was defined in config/routes.rb
    render file: "app/assets/i18n/" + params['locale']
  end

end
