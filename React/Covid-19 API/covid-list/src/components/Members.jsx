import React from 'react';

const Country = ({members}) => {
    return (
        <ul>
          {members.map((el, i) => (
            <li key={i}>{el.country}</li>
          ))}
        </ul>
      );
}

export default Country;
