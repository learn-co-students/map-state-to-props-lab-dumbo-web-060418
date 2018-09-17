import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

mappedUsers = () => {
  return this.props.users.map(user => {
    return <li>{user.username} - {user.hometown}</li>
  })
}
  render() {
    return (
      <div>
        <ul>
          {this.mappedUsers()}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  users: state.users,
  userCount: state.users.length
  }
}

//add mapStateToProps here

export default
connect(mapStateToProps)(Users)
