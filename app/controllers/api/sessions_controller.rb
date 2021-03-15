class Api::SessionsController < ApplicationController
     def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if !@user
            render json: ['invalid credentials'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if !current_user
            render json: ['no user found'], status: 404
        else
            logout!
            render json: {}
        end
    end
end