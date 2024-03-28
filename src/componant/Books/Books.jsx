import PropTypes from 'prop-types';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';
const Books = ({ book }) => {
    const {bookId, image, bookName, tags, author, rating, category } = book;

    return (
        <div className='mx-3 mt-4 '>
            <Link to={`/book/${bookId}`} >
            <div className="card  border border-gray-300 shadow-xl">
               <div className='bg-slate-100 m-4 p-4 rounded-xl '>
               <figure><img className='h-32 pt-3 bg-slate-100' src={image} alt="Shoes" /></figure>
               </div>
                <div className="card-body">
                    <div className='flex gap-5 text-pink-600 font font-bold'>
                        <p>{tags[0]}</p>
                        <p>{tags[1]}</p>
                    </div>
                    <h2 className="card-title font-extrabold">{bookName}</h2>
                    <p>By: <span className='font-sans mb-3'>{author}</span></p>
                    <hr />
                    <div className='flex justify-between mt-4 gap-24 items-center'>
                        <p>{category}</p>
                        <p className='flex items-center gap-1'>{rating}<MdOutlineStarBorderPurple500 /></p>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    );
};

Books.propTypes = {
    book: PropTypes.object
};

export default Books;