class Api::HoldingsController < ApplicationController
    def index
        @holdings = Holding.includes(:ticker).where(user_id: current_user.id)

        if @holdings
            render 'api/holdings/index'
        else
            render json: @holdings.errors.full_messages, status: 404
        end
    end

    def show
        @holding = current_user.holdings.includes(:ticker).find_by(id: params[:id])

        if @holding
            render 'api/holdings/show'
        else
            render json: @holding.errors.full_messages, status: 404
        end
    end
    
    def create
        @holding = Holding.create(holding_params)

        if @holding.save
            render 'api/holdings/show'
        else
            render json: @holding.full_messages, status: 401
        end
    end

    def update
        @holding = current_user.holdings.find_by(id: params[:id])
        
        if @holding.update_attributes(holding_params)
            render 'api/holdings/show'
        else
            render json: @holding.full_messages, status: 401
        end
    end

    def destroy
        holding = Holding.find_by(id: params[:id])

        if holding
            holding.destroy
        else
             render json: holding.full_messages, status: 404
        end

    end
    
    private

    def holding_params
        params.require(:holding).transform_keys(&:underscore).permit(:user_id, :ticker_id, :quantity, :avg_price)
    end
end
