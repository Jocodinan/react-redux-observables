import React from 'react';


const User = ({ generalStates }) => {
  const user = generalStates.get('data');

  if(!user.size)
    return false;
    
  const picture = user.getIn(['picture', 'medium']),
        userName = user.get('name'),
        userCompleteName = `${userName.get('first')} ${userName.get('last')}`;

  return (
    <div className="user">
      <img src={ picture } alt="" />
      <h1>{ userCompleteName }</h1>
    </div>
  );
}

export default User;