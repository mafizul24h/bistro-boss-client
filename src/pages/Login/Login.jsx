import React, { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                navigate(from, { replace: true });
                toast(`${result.user.displayName} successfully login`);
            }).catch(error => {
                console.log(error.message);
                toast.warn(error.message)
            })
    }

    // const captchRef = useRef(null);
    // const [disabled, setDisebled] = useState(true);

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    // const handleValidateCaptch = () => {
    //     const value = captchRef.current.value;
    //     // console.log(value);
    //     if(validateCaptcha(value)) {
    //         setDisebled(false);
    //     }else{
    //         setDisebled(true);
    //     }
    // }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label font-semibold">Email</label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Password</label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* ReCaptch Intregrate  */}
                            {/* <div className="form-control">
                                <LoadCanvasTemplate />
                                <input ref={captchRef} name='captch' type="text" placeholder="type captch" className="input input-bordered" required />
                                <button onClick={handleValidateCaptch} className="btn btn-neutral btn-sm mt-3">Validation Captch</button>
                            </div> */}

                            {/* disabled={disabled} its need to add submit input button  */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Please Login" />
                            </div>
                            <p>Don't Have An Account <Link className='text-blue-500 hover:underline' to='/signup'>Please Register</Link></p>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;