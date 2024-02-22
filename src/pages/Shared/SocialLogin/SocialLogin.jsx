import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import logo from './../../../assets/icon/google-icon.png'
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, role: 'user' };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                        toast(`${saveUser.name} login successfully`);
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div className='text-center mb-6'>
            <div className="divider font-semibold">login With Social</div>
            <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                <img className='h-6' src={logo} alt="Google" />
            </button>
        </div>
    );
};

export default SocialLogin;