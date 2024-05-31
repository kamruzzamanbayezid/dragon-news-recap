import PropTypes from 'prop-types';
import './NewsDetails.css';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { Rating, RoundedStar } from '@smastrom/react-rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const myStyles = {
      itemShapes: RoundedStar,
      activeFillColor: '#FF8C47',
      inactiveFillColor: '#FF8C47'
}

const NewsDetails = ({ news }) => {

      const [readMore, setReadMore] = useState(false);

      const { _id, rating, total_view, title, author, image_url, details } = news;

      return (
            <div className='mt-5 news-card'>
                  {/* card heading */}
                  <div className='flex justify-between items-center card-heading mb-2'>
                        <div className='flex items-center gap-3'>
                              <img className='w-10 h-10 rounded-full' src={author?.img} alt="" />
                              <div className='flex flex-col'>
                                    <span className='author-name'>{author?.name}</span>
                                    <span className='author-pub'>{author?.published_date}</span>
                              </div>
                        </div>
                        <div className='flex items-center gap-2'>
                              <CiBookmark size={24} />
                              <CiShare2 size={24} />
                        </div>
                  </div>
                  <div className='p-4'>
                        <h1 className='card-title'>{title}</h1>
                        <img className='mb-6 w-full' src={image_url} alt="" />
                        {
                              details?.length > 200 ?
                                    <span className='card-details mb-5'>{details.slice(0, 200)}</span>
                                    :
                                    <span className='card-details mb-5'>{details}</span>
                        }

                        <Link to={`/news/${_id}`}>
                              <span className='read-more ml-2 cursor-pointer'>Read More...</span>
                        </Link>
                        <hr className='my-5' />

                        <div className='flex justify-between items-center'>
                              <div className='flex items-center gap-2'>
                                    <Rating style={{ maxWidth: 110, color: '#FF8C47' }} value={rating} itemStyles={myStyles} />
                                    <span className='rating-num'>{rating?.number}</span>
                              </div>
                              <div className='flex items-center gap-2'>
                                    <AiFillEye className='text-2xl' />
                                    <span className='rating-num'>{total_view}</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

NewsDetails.propTypes = {
      news: PropTypes.object
};

export default NewsDetails;