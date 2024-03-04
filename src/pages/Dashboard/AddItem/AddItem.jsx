import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_Img_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const onSubmit = data => {
        // console.log(data)
        if (isNaN(data.price)) {
            return toast.error(`${data.price} is not a number`);
        }
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(resData => {
                if (resData.success) {
                    // console.log(resData.data.display_url);
                    const imageUrl = resData.data.display_url;
                    const { name, recipe, category, price } = data;
                    const newItem = { name, recipe, category, price: parseFloat(price), image: imageUrl }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your item has been added",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                            }
                        })
                }
            })
    };
    // console.log(errors);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Add Item</title>
            </Helmet>
            <SectionTitle heading={'Add an Item'} subHeading={'Whats New?'} />
            <form onSubmit={handleSubmit(onSubmit)} className='m-6 p-6 rounded-md bg-slate-200 w-3/4 mx-auto'>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Recepi Name<span className='text-red-600'>*</span></span>
                    </div>
                    <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <div className='md:flex gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Category<span className='text-red-600'>*</span></span>
                        </div>
                        <select defaultValue={'Pick One'} {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'soup'}>Soup</option>
                            <option value={'dessert'}>Dessert</option>
                            <option value={'drinks'}>Drinks</option>
                            <option value={'popular'}>Popular</option>
                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-bold">Price<span className='text-red-600'>*</span></span>
                        </div>
                        <input type="text" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-bold">Eecipe Details<span className='text-red-600'>*</span></span>
                    </div>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Upload Image<span className='text-red-600'>*</span></span>
                    </div>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                </label>
                <input className="btn btn-primary mt-3" type="submit" value="Add an Item" />
            </form>
        </div>
    );
};

export default AddItem;