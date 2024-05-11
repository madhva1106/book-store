import React from 'react';
import Cards from './Cards';
import List from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 item-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you{" "} <span className='text-pink-500 font-bold'>here!! :)</span></h1>
                    <p className='mt-12'>Explore a world of learning without boundaries with our diverse range of free courses, open to everyone seeking knowledge and skill enhancement. Our selection, developed by top universities and industry leaders, covers various subjects, from programming and data science to personal development and language skills. Whether you’re a curious learner or a seasoned professional, there’s something for you:</p>
                    <Link to='/'><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>

                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        List.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course