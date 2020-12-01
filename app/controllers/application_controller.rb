class ApplicationController < ActionController::Base
  before_action :configre_permitted_parameters, if: :devise_controller?

  def configre_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:company_name])
  end

  def after_sign_in_path_for(resource)
    stocks_path
  end
end
