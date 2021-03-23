class Api::UsersController < ApplicationController
    def show
        @user = User.includes(holdings: [:ticker]).find_by(id: params[:id])

        if @user
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 404
        end
    end
    
    def create
        @user = User.create(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @usee =  find_by(id: params[:id])

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    private

    def user_params
        params.require(:user).transform_keys(&:underscore)
            .permit(:email, :first_name, :last_name, :funds, :password)
    end
end