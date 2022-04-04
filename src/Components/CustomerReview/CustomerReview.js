import React from 'react';
import LoadReview from '../../hooks/LoadReview';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReview = () => {
    const [reviews, setReviews] = LoadReview();
    console.log(reviews);
    return (
        <div>
            <h1 className='text-4xl text-center mt-10'>Customer Review</h1>

            <div className='flex md:flex-row flex-col flex-wrap justify-center container mx-auto m-5'>
                {
                    reviews && reviews.slice(0, 3).map(review => <SingleReview key = {review._id} review = {review} />)
                }
            </div>
           <div className='text-center my-5'>
                <button className='border p-3'>See all review</button>
           </div>
        </div>
    );
};

export default CustomerReview;