import React from 'react';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [carts, refetch] = useCart();
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your item has been deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });


    }

    return (
        <div className='m-4, md:m-8'>
            <Helmet>
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className='flex justify-evenly uppercase mb-4'>
                <h3 className='text-2xl font-semibold'>Total Order: {carts?.length}</h3>
                <h3 className='text-2xl font-semibold'>Total Price: ${totalPrice}</h3>
                <button className='btn btn-warning'>Pay</button>
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
                                <th className='text-right'>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts?.map((cart, index) => (
                                <tr className='hover' key={cart?._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cart?.image} alt={cart?.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cart?.name}</td>
                                    <td className='text-right'>{cart.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(cart?._id)} className="btn btn-error"><FaTrashAlt className='text-white text-xl' /></button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;