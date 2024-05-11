import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Contactus() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => { console.log(data) }

    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg ">ContactUs</h3>

                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter Your FullName'
                                    className='w-80 px-3 py-1 rounded-md border outline-none'
                                    {...register("name", { required: true })} />
                                    <br />
                                    {errors.name && <span className='text-sm text-red-500'>Please Enter The Email</span>}
                            </div>

                            <div className='mt-6 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter Your Email'
                                    className='w-80 px-3 py-1 rounded-md border outline-none'
                                    {...register("email", { required: true })} />
                                    <br />
                                    {errors.email && <span className='text-sm text-red-500'>Please Enter The Email</span>}
                            </div>

                            <div className='mt-6 space-y-2'>
                                <span>Message</span>
                                <br />
                                <textarea type="text"
                                    placeholder='Enter Your Message...'
                                    className='w-80 h-1000 px-3 py-1 rounded-md border outline-none'
                                    {...register("message", { required: true })} />
                                    <br />
                                    {errors.message && <span className='text-sm text-red-500'>Please Enter Your Message</span>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
                                
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Contactus