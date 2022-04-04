import React from 'react';
import LoadReview from '../../hooks/LoadReview';
import SingleReview from '../SingleReview/SingleReview';

const AllReview = () => {
    const [reviews, setReviews] = LoadReview();
    return (
        <div>
            <h1 className="text-4xl text-center mt-10">Customer Says,</h1>
            <div className='flex md:flex-row flex-col flex-wrap justify-center container mx-auto m-5'>
                {
                    reviews && reviews.map(review => <SingleReview key = {review._id} review = {review} />)
                }
            </div>
        </div>
    );
};

export default AllReview;