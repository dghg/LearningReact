import React from 'react';
import CountryNames from './CountryNames';
import DataComponent from './DataComponent';


const CountryDropDown = DataComponent(CountryNames, "https://restcountries.eu/rest/v1/all")

export default CountryDropDown;