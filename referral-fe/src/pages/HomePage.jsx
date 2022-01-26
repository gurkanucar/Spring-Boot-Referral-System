import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllByReferralCode, getUserByUsername } from '../api/apiCalls';
import { UserDetailsComponent } from '../components/UserDetailsComponent';

export const HomePage = () => {


    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState();
    const [friends, setFriends] = useState();
    const [error, setError] = useState();


    const getUsersByReferralCode = async (code) => {
        try {
            const response = await getAllByReferralCode(code);
            setFriends(response.data);
        } catch (error) {
            setFriends()
        }
    };



    const getUser = async () => {
        try {
            const response = await getUserByUsername(username);
            setUserData(response.data);
            setError()
            await getUsersByReferralCode(response.data.referralCode)
        } catch (error) {
            setUserData()
            setError(error.response.data["error"])
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        console.log(username);
    }, [username]);


    const handleChange = (e) => {
        setUsername(e.target.value)
    }


    return <div >
        <div className='container'>
            <div className="row" style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
                <div className='row' style={{ display: "flex", justifyContent: "center", }}>
                    <div className="col-auto">
                        <input required className="form-control" onChange={(e) => { handleChange(e) }} placeholder="Username" />
                    </div>
                    <div className="col-auto">
                        <button type="button" onClick={() => getUser()} className="btn btn-primary mb-3">Login</button >
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", }} >
                    <UserDetailsComponent userData={userData} friends={friends} />
                </div>

                {error && (<div style={{ display: "flex", justifyContent: "center", }} >
                    <p style={{ color: "red" }}>  {error}</p>
                </div>)}
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }} >
            <Link to="/signup">
                <button style={{ paddingLeft: "200px", paddingRight: "200px" }}
                    type="button" className="btn btn-primary mb-3">SIGNUP !</button >
            </Link>
        </div>


    </div >;
};
