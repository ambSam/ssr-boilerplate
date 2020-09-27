import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/users";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetch_users();
  }

  render() {
    return (
      <div>
        {this.props.users &&
          this.props.users.map((user) => {
            return user.name;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users.usersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_users: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
