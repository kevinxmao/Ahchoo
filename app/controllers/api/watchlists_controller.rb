class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.includes(:tickers).where(user_id: current_user.id)

        if @watchlists
            render 'api/watchlists/index'
        else
            render json: @watchlists.errors.full_messages, status: 404
        end
    end

    def show
        @watchlist = current_user.watchlists.includes(:tickers).find_by(id: params[:id])

        if @watchlist
            render 'api/watchlists/show'
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)

        if @watchlist.save
            render 'api/watchlists/show'
        else
            render json: @watchlist.errors.full_messages, status: 401
        end
    end

    def update
        @watchlist = current_user.watchlists.includes(:tickers).find_by(id: params[:id])
        if @watchlist.update(watchlist_params)
            received_tickers_arr = [];

            if params[:watchlist][:tickers]
                received_tickers_arr = JSON.parse(params[:watchlist][:tickers])
            end

            if @watchlist.tickers.length < received_tickers_arr.length
                prev_tickers = @watchlist.tickers.map{|ticker| ticker[:ticker]}
                new_tickers = received_tickers_arr.map{|ticker| ticker['ticker']}

                # ticker_id_to_add = (new_tickers - prev_tickers).first
                ticker_to_add = (new_tickers - prev_tickers).first;
                ticker_id_to_add = Ticker.find_by(ticker: ticker_to_add);
                
                WatchlistJoin.create(watchlist_id: params[:id], ticker_id: ticker_id_to_add)

            elsif @watchlist.tickers.length > received_tickers_arr.length
                prev_tickers = @watchlist.tickers.map{|ticker| ticker[:id].to_i}
                new_tickers = received_tickers_arr.map{|ticker| ticker['id'].to_i}

                ticker_id_to_destroy = (prev_tickers - new_tickers).first
                ticker_to_destroy = @watchlist.watchlist_joins.find_by(ticker_id: ticker_id_to_destroy)
                ticker_to_destroy.destroy
            end

            show();
            
        else
            render json: @watchlist.errors.full_messages, status: 404
        end

    end

    def destroy
        watchlist = Watchlist.find_by(id: params[:id])
        watchlist.destroy
    end

    private

    def watchlist_params
        params.require(:watchlist).transform_keys(&:underscore).permit(:id, :name, :user_id)
    end
end
