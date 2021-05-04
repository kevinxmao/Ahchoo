import React, { useState, useEffect } from 'react';
import { fetchWatchlistInfo } from '../../../util/companies/data_api_util';
import WatchlistRow from './watchlist_row';
import LoadingPage from '../../loading_page';
import { useDispatch } from 'react-redux';
import { updateWatchlist } from '../../../actions/watchlists_actions';
import { camalize } from '../../../util/util_functions';

export default function WatchlistTable(props) {
    const initialSortState = {
        name: '',
        symbol: '',
        price: '',
        today: '',
        marketCap: '',
    }
    const [sort, setSort] = useState(initialSortState);
    const [symbols, setSymbols] = useState([]);
    const [data, setData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const tickerArr = props.tickers.map(ticker => ticker.ticker)
        setSymbols(tickerArr);
        fetchWatchlistInfo(tickerArr).then(res => {
            const obj = {};
            for (let [key, value] of Object.entries(res) ) {
                let datum = {
                    name: value.company.companyName,
                    symbol: key,
                    price: value.price,
                    today: value.quote.changePercent,
                    marketCap: value.stats.marketcap
                };
                obj[key] = datum;
            }
            setData(obj);
        });
    }, [props.tickers]);

    function handleHeaderClick(key) {
        debugger;
        switch(sort[key]) {
            case '':
                setSort(Object.assign({}, initialSortState, { [key]: 'ASC'}));
                setSymbols(sortSymbols(symbols, key, 'ASC', data));
                break;
            case 'ASC':
                setSort(Object.assign({}, initialSortState, { [key]: 'DSC' }));
                setSymbols(sortSymbols(symbols, key, 'DSC', data));
                break;
            case 'DSC':
                setSort(Object.assign({}, initialSortState, { [key]: '' }));
                setSymbols(props.tickers.map(ticker => ticker.ticker));
                break;
            default:
                break;
        }
    }

    function renderColumnHeader(headerName) {
        const key = camalize(headerName);
        const className = sort[key] ? "column-header active" : "column-header";
        return (
            <div className={className}>
                <button onClick={() => handleHeaderClick(key)}>
                    <div>{headerName}</div>
                    <div className="header-arrow"></div>
                </button>
            </div>
        )
    }

    function deleteItem(symbol) {
        const watchlist = props.watchlist;
        const newTickers = watchlist.tickers.filter(ticker => ticker.ticker !== symbol);
        watchlist.tickers = newTickers;
        dispatch(updateWatchlist(watchlist));
    }

    function renderTableBody() {
        if (!!symbols.length && data) {
            return symbols.map((symbol, i) => <WatchlistRow key={i} symbol={symbol} data={data} deleteItem={deleteItem}/>)
        } else {
            return <LoadingPage />
        }
    }

    return (
        <div className="table">
            <header className="table-header">
                <div>
                    {renderColumnHeader('Name')}
                    {renderColumnHeader('Symbol')}
                    {renderColumnHeader('Price')}
                    {renderColumnHeader('Today')}
                    {renderColumnHeader('Market Cap')}
                </div>
            </header>
            <div className="table-body">
                {renderTableBody()}
            </div>
        </div>
    )
}

function sortSymbols(symbols, field, order, data) {
    let comparator;
    if (order === 'ASC') {
        comparator = (a, b) => {
            if (data[a][field] < data[b][field]) {
                return -1;
            } else if (data[a][field] > data[b][field]) {
                return 1;
            } else {
                return 0;
            }
        }
    } else {
        comparator = (a, b) => {
            if (data[a][field] > data[b][field]) {
                return -1;
            } else if (data[a][field] < data[b][field]) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    return symbols.sort(comparator);
}