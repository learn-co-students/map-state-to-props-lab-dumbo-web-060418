import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  mappedUsers = () => {
    return this.props.users.map(user => (<li key={user.username}>{user.username} - {user.hometown}</li>))
  }

  render() {
    return (
      <div>
        <h3>Total users: {this.props.userCount}</h3>
        <ul>
          {this.mappedUsers()}
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

export default connect(mapStateToProps)(Users);
