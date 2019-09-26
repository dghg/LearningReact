import React, { Component } from 'react';
import PeopleList from './PeopleList';
import DataComponent from './DataComponent';

const RandomMeUsers = DataComponent(PeopleList, "http://randomuser.me/api/")

export default RandomMeUsers;