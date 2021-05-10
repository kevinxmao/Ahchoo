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

### Watchlists
Users can view a list of stocks for a watchlist and sort them based on selected criteria.