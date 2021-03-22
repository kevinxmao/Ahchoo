class Api::TickersController < ApplicationController
    def index
        @tickers = Ticker.all

        if @tickers
            render 'api/tickers/index'
        else
            render json: @tickers.errors.full_messages, status: 404
        end
    end

    def show
        @ticker = Ticker.find_by(id: params[:id])

        if @ticker
            render 'api/tickers/show'
        else
            render json: @ticker.errors.full_messages, status: 404
        end
    end
end
