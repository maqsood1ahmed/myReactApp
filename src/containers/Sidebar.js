import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

import * as actionCreators from "../actions/index.js"

export const Sidebar = connect(state => ({
    users: state.users
}), actionCreators)(SidebarComponent);