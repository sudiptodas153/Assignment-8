import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoreData } from "../../utility/localStorage";
import { saveStoreWishlist } from "../../utility/localStorageWish";

const BookDeatils = () => {


    const books = useLoaderData();
    const { bookid } = useParams();
    const book = books.find(books => books.bookId === bookid);


    const handleRead = () => {
        saveStoreData(bookid)
    }

    


    const handleWishlist = () => {
        saveStoreWishlist(bookid)
       
    }

    return (
        <div className="container mx-auto lg:flex mt-20 justify-center gap-16 items-center">
            <div className="w-44 px-4 lg:w-96">
                <img className="" src={book.image} alt="" />
            </div>
            <div className="lg:flex-1 px-4">
                <h2 className="text-3xl p lg:text-5xl font-serif font-semibold mb-3">{book.bookName}</h2>
                <p className="font-medium  font-serif  mb-5">By: {book.author}</p>
                <hr />
                <p className="font-medium mt-3 mb-3">{book.category}</p>
                <hr />
                <div className="mt-4 mb-4">
                    <h2><span className="font-extrabold">Review:</span> <span className="font-serif">{book.review}</span></h2>
                    <div className=" ">
                        <h2 className="mb-6  mt-5"><span className="font-extrabold">Tag:</span> <span className="text-rose-700 font-bold ml-5 mr-9">#{book.tags[0]}</span> <span className="text-rose-700 font-bold">#{book.tags[1]}</span></h2>

                    </div>
                </div>
                <hr />
                <div className="mt-4">
                    <p className="mb-2">Numbeer of Pages: <span className="ml-12 font-semibold">{book.totalPages}</span></p>
                    <p className="mb-2">Publisher: <span className="ml-28 font-semibold">{book.publisher}</span></p>
                    <p className="mb-2">Year of Publishing: <span className="ml-[50px] font-semibold">{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className="ml-[132px] font-semibold">{book.rating}</span></p>
                </div>
                <div className="mt-6 ">
                    <button onClick={handleRead} className="btn mr-5 border font-bold text-black border-gray-300 px-8 h-12">Read</button>
                    <button onClick={handleWishlist} className="btn bg-lime-600 text-white font-bold">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDeatils;