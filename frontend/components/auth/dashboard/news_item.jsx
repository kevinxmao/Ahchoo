import React from 'react';

export default function NewsItem(props) {

    function getHours(prevDate) {
        const currDate = new Date();
        let seconds = Math.floor((currDate - prevDate) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        return parseInt(hours);
    }

    return (
        <div className="news-item">
            <article className="news-article">
                <a href={props.news.url} target="_blank" rel="nofollow"></a>
                <div className="news-source">
                    <div>
                        <span className="source">{props.news.source}</span>
                        <span className="time-lapse">{`${getHours(props.news.datetime)}h`}</span>
                    </div>
                </div>
                <div className="news-content">
                    <div className="headline"><span>{props.news.headline}</span></div>
                    <div className="news-img-container">
                        <div style={{backgroundImage: `url(${props.news.image})`}}></div>
                    </div>
                </div>
            </article>
        </div>
    )
}