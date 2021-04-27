class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.includes(:ticker).where(user_id: current_user.id)

        if @watchlists
            render 'api/watchlists/index'
        else
            
        end
    end
end
