import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {
    const { createUser, updateUserProfile, logOut, setReload } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => { setReload(true) }).catch(error => console.log(error))
                logOut().then(() => { }).catch(error => console.log(error));
                toast(`${data.name} registration successfully please login`)
                navigate('/login');
                reset();
            }).catch(error => {
                console.log(error.message);
                toast.warn(error.message);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label font-semibold">Name</label>
                                <input {...register("name", { required: true })} name='name' type="text" placeholder="name" className="input input-bordered" />
                                {/* {errors.name && <span className='text-red-500'>This field is required</span>} */}
                                {errors.name?.type === "required" && (
                                    <p className='text-red-500'>Name is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Profile Photo</label>
                                <input {...register("photo", { required: true })} name='photo' type="url" placeholder="your profile photo" className="input input-bordered" />
                                {/* {errors.name && <span className='text-red-500'>This field is required</span>} */}
                                {errors.name?.type === "required" && (
                                    <p className='text-red-500'>Name is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Email</label>
                                <input {...register("email", { required: true })} name='email' type="email" placeholder="email" className="input input-bordered" />
                                {/* {errors.name && <span className='text-red-500'>This field is required</span>} */}
                                {errors.email?.type === "required" && (
                                    <p className='text-red-500'>Email is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Password</label>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })} name='password' type="password" placeholder="password" className="input input-bordered" />
                                {/* {errors.name && <span className='text-red-500'>This field is required</span>} */}
                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-500'>Password is required 6 charecters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-500'>Password is required one small letter one capital lettter one special carecter and one number charecters</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Please Login" />
                            </div>
                            <p>Already Have An Account <Link className='text-blue-500 hover:underline' to='/login'>Please Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;