import React from 'react';
import { UserItem } from './UserItem';

export const UserList = (props) => {
    const { users } = props;
    return <div style={{ display: "flex" }}>
        {users?.map((x) => {
            console.log("X: " + JSON.stringify(x));
            return <div key={x?.id} className='container' ><UserItem user={x} /></div>
        })}
    </div>;
};
