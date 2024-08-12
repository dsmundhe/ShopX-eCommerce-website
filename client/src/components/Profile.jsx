import React from 'react';
import '../style/Profile.css'
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { logout } from '../features/ecomSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
    const loginData = useSelector((data) => data.login);
    const dispatch = useDispatch();
    return (
        <div className='profile-page'>
            {
                loginData.length !== 0 ? (<>   {
                    loginData.map((user) => {
                        return <>
                            <div className='profile-info' key={user.name}>
                                <div className="profile1">
                                    <CgProfile />
                                </div>
                                <h1>Welcome</h1>
                                <p><strong>Name:</strong>  {user.name}</p>
                                <p><strong>Email:</strong>  {user.email}</p>
                                {/* <p><strong>Password:</strong> {user.password}</p>
                            <p><strong>Mobile No:</strong>{}</p>
                            <p><strong>Age:</strong>  </p>
                            <p><strong>Address:</strong>  </p> */}
                                <p>"Welcome! We're thrilled to have you here. May your journey with us <br />be filled with growth, learning, and success."</p>
                                <button className='logout-button'
                                    onClick={() => dispatch(logout())}
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    })
                }</>) : (<>
                    <div className='btns'>
                        <Link to='/'><button>Go to Home page</button></Link>
                        <h2>Logout successful.......</h2>
                    </div>
                </>)
            }
        </div>
    );
};

export default ProfilePage;
