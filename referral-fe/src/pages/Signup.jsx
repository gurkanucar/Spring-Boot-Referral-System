import React, { useEffect, useState } from 'react';
import {
    useParams,
} from 'react-router-dom';
import { createUser } from '../api/apiCalls';

export const Signup = () => {

    const { ref } = useParams();

    const [values, setValues] = React.useState({
        username: "",
        mail: "",
        name: "",
        surname: "",
        referredByCode: ref
    });

    const [error, setError] = useState();

    const signUp = async () => {
        try {
            const response = await createUser(values);
            setError()
            setValues({
                username: "",
                mail: "",
                name: "",
                surname: "",
                referredByCode: ref
            })
        } catch (error) {
            const err = error.response.data
            const errorArray = Object.keys(err).map((x) => {
                return x + ": " + err[x]
            })
            setError(errorArray)
            console.log(errorArray);
        }
    };

    useEffect(() => {
        console.log({ values });
    }, [values]);


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    return <div style={{ margin: "200px" }}>



        <div className='container' style={{ display: "flex", justifyContent: "center" }}>
            <div className='row'>


                <div className='row mb-3 mt-3' style={{ display: "flex", justifyContent: "center" }}>

                    <div className='col-md-8'>

                        < h1>Signup</h1>

                    </div>
                </div>

                <div className='row mb-3 mt-3' style={{ display: "flex", justifyContent: "center" }}>
                    <div className='col-md-4'>

                        <input onChange={handleChange("username")} value={values.username} required className="form-control" placeholder="Username" />

                    </div>
                    <div className='col-md-4'>

                        <input onChange={handleChange("mail")} value={values.mail} required className="form-control" placeholder="Mail" />

                    </div>
                </div>

                <div className='row mt-3 mb-3' style={{ display: "flex", justifyContent: "center" }}>
                    <div className='col-md-4'>
                        <input required onChange={handleChange("name")} value={values.name} className="form-control" placeholder="Name" />
                    </div>
                    <div className='col-md-4'>
                        <input required onChange={handleChange("surname")} value={values.surname} className="form-control" placeholder="Surname" />
                    </div>
                </div>

                <div className='row mt-3 mb-3' style={{ display: "flex", justifyContent: "center" }}>
                    <div className='col-md-2'>
                        <input
                            onChange={handleChange("referredByCode")}
                            value={values.referredByCode}
                            defaultValue={ref}
                            required className="form-control" placeholder="Referance code" />
                    </div>
                </div>

                <div className='row mt-3 mb-3' style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" onClick={() => signUp()}
                        className="btn btn-primary btn-block col-md-3">Signup</button >

                </div>




                {error && (<div style={{ display: "flex", justifyContent: "center", whiteSpace: "pre-line" }} >
                    <p style={{ color: "red", textAlign: "center" }}>{error.map((x) => {
                        return x + "\n";
                    })}</p>
                </div>)}


            </div>
        </div>
    </div>;
};
