import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    companies: undefined
})

const mapDispatchToProps = dispatch => ({
    fetchCompany: undefined
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));