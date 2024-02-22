import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUser, FaUserTie } from 'react-icons/fa';
import useUser from '../../../hooks/useUser';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const [users, refetch] = useUser();

    const handleMakeAdmin = (u) => {
        // console.log(id);
        fetch(`http://localhost:5000/makeAdmin/${u._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                refetch();
                toast(`${u.name} has been make Admin`);
            }
        })
    }

    return (
        <div className='m-4, md:m-8'>
            <Helmet>
                <title>Bistro Boss || Manage Users</title>
            </Helmet>
            <div className='text-center uppercase mb-4'>
                <h2 className='text-xl font-bold'>Total Users {users?.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th >Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((u, index) => <tr key={u._id} className='hover' >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={u.photo && u.photo} alt={u.name && u.name} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{u.name && u.name}</td>
                                <td>{u.email && u.email}</td>
                                <td >{u.role === 'admin' ? <button className='btn btn-success btn-sm'><FaUserTie className='text-xl' /></button>  : <button onClick={() =>handleMakeAdmin(u)} className='btn btn-warning btn-sm'>
                                    <FaUser className='text-xl' />
                                </button>}</td>
                                <th>
                                    <button className="btn btn-error"><FaTrashAlt className='text-white text-xl' /></button>
                                </th>
                            </tr>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;