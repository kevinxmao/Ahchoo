class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.includes(:ticker).where(user_id: current_user.id)

        if @watchlists
            render 'api/watchlists/index'
        else
            render json: @watchlists.errors.full_messages, status: 404
        end
    end

    def show
        @watchlist = current_user.watchlists.includes(:ticker).find_by(id: params[:id])

        if @watchlist
            render 'api/watchlists/show'
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    def create
        @watchlist = Watchlist.create(watchlist_params)

        if @watchlist.save
            render 'api/watchlists/show'
        else
            render json: @watchlist.full_messages, status: 401
        end
    end

    def update
        
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
