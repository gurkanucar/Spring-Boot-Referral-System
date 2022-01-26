import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllByReferralCode } from '../api/apiCalls';
import { UserList } from './UserList';


export const UserDetailsComponent = (props) => {

    const { userData, friends } = props;

    const [referredUsers, setReferredUsers] = useState(friends);


    useEffect(() => { setReferredUsers(friends)}, [friends] )


    const getUsersByReferralCode = async (code) => {
        try {
            const response = await getAllByReferralCode(code);
            setReferredUsers(response.data);
        } catch (error) {
            setReferredUsers()
        }
    };



    return <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='row'>
            <div className='row' style={{ display: "flex", justifyContent: "center", }}>
                {userData && (<div className="card" style={{ width: "25rem", borderRadius: "25px" }}>
                    <div className="card-body text-center">
                        <h5 style={{ marginBottom: 25 }} className="card-title">User Details</h5>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>id :</strong> {userData.id}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>username :</strong> {userData.username}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>name :</strong> {userData.name}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>surname :</strong> {userData.surname}</p>
                        <p style={{ marginBottom: 5 }} className="card-text"><strong>mail : </strong>{userData.mail}</p>
                        <p className="card-text"><strong>referralCode : </strong>{userData.referralCode}</p>
                        <button className="btn btn-danger" onClick={() => getUsersByReferralCode(userData.referralCode)}
                            style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }} href="#" >My Referred Friends</button>

                        <Link to={`/signup/${userData.referralCode}`}>
                            <button className="btn btn-success"
                                style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }} href="#" >Invite!</button>
                        </Link>
                    </div>
                </div>)}
                {referredUsers && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }} >
                        <UserList users={referredUsers} />
                    </div>
                )}
            </div>
        </div>
    </div>;
};
