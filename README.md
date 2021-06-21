<p align="center"><a href="#" target="_blank"><img src="https://i.imgur.com/eIHy8c2.png" width="400"></a></p>

# Ahchoo

[Link to live site](https://ahchoo.herokuapp.com)

## Intro
Ahchoo is a clone of the popular Robinhood trading webapp. Ahchoo allows users to simulate buying and selling assets listed on NYSE and NASDAQ using live data prpvided by a third-party API. Users can sign up, log in, add funds, search and trade on Ahchoo.

## Built With
* React
* Redux
* Ruby on Rails
* Postgres
* Heroku
* Webpack
* Babel

## Third-party APIs and Libraries
* IEX Cloud (Financial market data)
* Unsplash (Open source photos)
* Robinhood (Images and references)

## Key Features to Note

### User Authentication
Upon navigating to the splash page, user has the option to login or signup with Ahchoo. If incorrect or insufficient information is provided, errors will be displayed.

#### Login Page
![Login Demo](https://media.giphy.com/media/pjYxbsdGE7cZLmkWRT/giphy.gif)

### Dashboard View
The main feature of Ahchoo is user portfolio dashboard. Users can see their portfolio value as a rendered number or a chart that dynamically changes according to specified date range. Data for all holding stocks is fetched from IEX Cloud API upon rendering.

#### Chart
Porfolio value dynamically changes when user hovers over the chart.

![Chart Demo](https://media.giphy.com/media/xfQGchZSnsyppcS019/giphy.gif)

### Company View
Users can see holding information if they own a specific stock. Users can also execute trades (buy/sell) or add stock to created watchlists.

#### Trade execution logic on Backend

```ruby
def receive_order(order)
    new_funds = self.funds - order[:quantity].to_f * order[:avg_price].to_f
    self.update_attribute(:funds, new_funds)
end

def sell_all(order)
    new_funds = self.funds + order[:quantity].to_f * order[:avg_price].to_f
    self.update_attribute(:funds, new_funds)
end

def buy_new(order)
    new_funds = self.funds - order[:quantity].to_f * order[:avg_price].to_f
    self.update_attribute(:funds, new_funds)
end
```
[See code snippet in file](https://github.com/kevinxmao/Ahchoo/blob/a3d85ef1e9b375a53e8a332b913131ddc077e15c/app/models/user.rb#L60-L73)

### Watchlists
Users can view a list of stocks for a watchlist and sort them based on selected criteria.

#### Adding stocks to watchlists
On form submission, the status of watchlists are checked to see if an update on the backend is needed. An array of asynchronous functions are called to perform watchlist updates, and modal will be closed if all backend API calls are successful.

```javascript
export const updateWatchlist = watchlist => {
    watchlist.tickers = JSON.stringify(watchlist.tickers);

    return $.ajax({
        method: 'PATCH',
        url: `api/watchlists/${watchlist.id}`,
        data: { watchlist }
    })
}
```
[See code snippet in file](https://github.com/kevinxmao/Ahchoo/blob/dad471dd14303bd7e36b4f4cba81ba0651656970/frontend/util/watchlists/watchlists_api_util.js#L23-L31)

```javascript
function handleSubmit() {
        let reqWatchlists = [];
        for (let id in fixedStatus) {
            if (fixedStatus[id] !== status[id]) {
                const newWatchlist = Object.assign({}, watchlists[id]);
                const tickersArr = newWatchlist.tickers;

                if (status[id]) {
                    tickersArr.push({ticker: props.tickerSymbol});
                } else {
                    const index = tickersArr.findIndex(ele => ele.ticker === props.tickerSymbol);
                    tickersArr.splice(index, 1);
                }

                newWatchlist.tickers = tickersArr;
                reqWatchlists.push(newWatchlist);
            }
        }

        Promise.all(reqWatchlists.map(watchlist => dispatch(updateWatchlist(watchlist)))).then(
            () => dispatch(closeModal())
        );
    }
```
[See code snippet in file](https://github.com/kevinxmao/Ahchoo/blob/dad471dd14303bd7e36b4f4cba81ba0651656970/frontend/components/auth/watchlist/watchlist_modal/add_to_lists_form.jsx#L27-L52)

## Future Feature Implementation:
- Stock trading based on dollar amount
- Crypto trading
- Continuous news update
