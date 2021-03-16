class Api::UsersController < ApplicationController
    
    def create
        @user = User.create(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
    
    private

    def user_params
        params.require(:user).transform_keys(&:underscore)
            .permit(:email, :first_name, :last_name, :funds, :password)
    end
end
