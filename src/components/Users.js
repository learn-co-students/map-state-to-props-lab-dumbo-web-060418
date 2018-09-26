import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  listUsers = (users) => {
    return users.map(user => {
      return <li key={user.username}>{user.username} {user.hometown}</li>
    })
  } 

  render() {
    return (
      <div>
        <ul>
          Users!
          <p>Number of users: {this.props.users.length}</p>
          {this.listUsers(this.props.users)}
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
