import React from 'react';

const Members = ({members}) => {
    return (
        <ul>
          {members.map((el, i) => (
            <li key={i}>{el.country}</li>
          ))}
        </ul>
      );
}

export default Members;
