import React from "react";

const UserItems = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={login}
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <a href={html_url} className='btn btn-dark btn-sm my-1'>
        More
      </a>
    </div>
  );
};

export default UserItems;
