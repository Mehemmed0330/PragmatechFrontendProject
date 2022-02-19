import React from 'react';
import Members from "./Members"

const Number = ({number}) => {
    return (
        <div>
            <h1>{number.deaths}</h1>
            <Members members={number.members} />
        </div>
    );
}

export default Number;
