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
        if !params[:holding][:ticker_id]
            @ticker = Ticker.find_by(ticker: params[:holding][:ticker])
            @holding = Holding.create(holding_params.merge(ticker_id: @ticker.id))
        else
            @holding = Holding.create(holding_params)
        end
    
        if @holding.save
            current_user.buy_new(holding_params)
            render 'api/users/show'
        else
            render json: @holding.full_messages, status: 401
        end
    end

    def update
        @holding = current_user.holdings.find_by(id: params[:id])
        
        if @holding.edit_holding(holding_params) && current_user.receive_order(holding_params)
            render 'api/users/show'
        else
            render json: @holding.full_messages, status: 401
        end
    end

    def destroy
        holding = Holding.find_by(id: params[:id])

        if holding
            order = {quantity: holding.quantity, avg_price: holding.avg_price}
            current_user.sell_all(order)
            holding.destroy
            render 'api/users/show'
        else
             render json: holding.full_messages, status: 404
        end

    end
    
    private

    def holding_params
        params.require(:holding).transform_keys(&:underscore).permit(:id, :user_id, :ticker_id, :quantity, :avg_price)
    end
end