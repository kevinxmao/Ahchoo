import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = state => ({
    companies: undefined
})

const mapDispatchToProps = dispatch => ({
    fetchCompany: undefined
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);