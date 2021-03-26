import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingPage = () => (
    <div className="loading-page"><Loader type="Bars" color="#00c805" timeout={3000}/></div>
)

export default LoadingPage;