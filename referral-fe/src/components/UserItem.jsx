import React from 'react';

export const UserItem = (props) => {

    const { user } = props;

    return <div style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: 25, borderRadius: "25px" }}>
        <p style={{ marginBottom: 5 }} className="card-text"><strong>id :</strong> {user.id}</p>
        <p style={{ marginBottom: 5 }} className="card-text"><strong>username :</strong> {user.username}</p>
        <p style={{ marginBottom: 5 }} className="card-text"><strong>referredBy : </strong>{user.referredByCode}</p>
        <p className="card-text"><strong>refCode : </strong>{user.referralCode}</p>
    </div>;
};
