class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token # remove before deploying
    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        return !!current_user
    end

    def login!(user)
        session[:session_token] = user.ensure_session_token
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end
end
