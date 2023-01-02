import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchUsersAction} from "../../redux/actions/actions";
import User from "../../components/user/User";

class UsersPageClass extends Component {

    getUsers = () => {
        this.props.fetchUsersAction()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>more info</li>
                    <li>name:</li>
                    <li>address:</li>
                    <li>username:</li>
                    <li>email:</li>
                </ul>
                <button onClick={this.getUsers}>get users</button>
                {this.props.users.map(user => <User userInfo={user}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = {
    fetchUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageClass);