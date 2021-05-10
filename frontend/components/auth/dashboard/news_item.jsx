import React from 'react';

export default function NewsItem(props) {
    debugger

    return (
        <div className="news-item">
            <article className="news-article">
                <a href=""target="_blank" rel="nofollow"></a>
                <div className="news-source">
                    <span className="source"></span>
                    <span className="time-lapse"></span>
                </div>
                <div className="news-content">
                    <div className="summary"><span></span></div>
                    <div className="news-img-container">
                        <img src="" alt=""/>
                    </div>
                </div>
            </article>
        </div>
    )
}