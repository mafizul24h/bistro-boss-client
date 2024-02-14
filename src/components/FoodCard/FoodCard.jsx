import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ items }) => {
    const { user } = useContext(AuthContext);
    const [carts, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const handleAddToCart = (item) => {
        // console.log(item);
        const { _id, name, image, price } = item;
        const cartItem = { menuId: _id, name, image, price, email: user?.email }
        if (user && user.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your item has been add",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "Want to add to cart this item!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className='my-4'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            items?.map(item => (
                                <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-full' src={item.image} alt={item.name} /></figure>
                                    <p className='bg-slate-800 text-white absolute right-0 me-5 mt-4 py-2 px-4 rounded-md font-semibold'>${item.price}</p>
                                    <div className="card-body">
                                        <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
                                        <p>{item.recipe}</p>
                                        <div className="card-actions justify-center">
                                            <button onClick={() => handleAddToCart(item)} className='btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-600 mt-8'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCard;