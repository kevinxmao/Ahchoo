import React from 'react';
import NewsItem from './news_item';

export default function NewsContainer(props) {

    function renderNewsItems() {
        let allNews = [];
        Object.values(props.data).forEach((datum) => {
            allNews = allNews.concat(datum["news"].slice(0,2));
        });
        // debugger;
        return allNews.map((news, i) => <NewsItem key={i} news={news}/>)
    }

    return (
        <div className="news-container">
            <header className="news-section-header">
                <div><h2>News</h2></div>
            </header>
            <div className="all-news">
                {renderNewsItems()}
            </div>
        </div>
    );
}