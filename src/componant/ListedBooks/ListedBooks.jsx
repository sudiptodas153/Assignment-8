import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRestorePage } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { getStoreData } from "../../utility/localStorage";
import { getStoreWishlist } from "../../utility/localStorageWish";
const ListedBooks = () => {

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoreData();
        if (books.length > 0) {
            const booksRead = books.filter(book => storedBookIds.includes(book.bookId));
            setReadBooks(booksRead);


        }

    }, [])

    useEffect(() => {
        const wishBookIds = getStoreWishlist();
        if (books.length > 0) {
            const booksWish = books.filter(wish => wishBookIds.includes(wish.bookId));
            setWishReadBooks(booksWish);

        }
    }, [])




    return (
        <div className="container mx-auto my-20">


            <div className="">
                <div className="">
                    <h2 className="font-extrabold text-3xl text-center mb-3">Books</h2>
                    <p className="text-center">Your Wishlist and Readed Books added here. </p>
                </div>
                <div className="text-center mt-5 lg:text-end">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-violet-600 text-white">Sort By<RiArrowDropDownLine className="text-white text-3xl"></RiArrowDropDownLine></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className=" hover:bg-lime-400 rounded-lg"><a>Rating</a></li>
                            <li className=" hover:bg-lime-400 rounded-lg"><a>Number of Pages</a></li>
                            <li className=" hover:bg-lime-400 rounded-lg"><a>Published Year</a></li>
                        </ul>
                    </details></div>
            </div>

            <div role="tablist" className="tabs mt-20 lg:mb-80 tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-[8px] lg:text-[16px] font-extrabold text-green-500" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content mx-2  bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            readBooks.map(book => <div key={book.bookId} >
                                <div className="">
                                    <div className="card lg:card-side mt-10 p-4 lg:p-10 border border-gray-400 bg-base-100 shadow-xl">
                                        <figure><img className="lg:w-44" src={book.image} alt="Album" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title font-serif font-bold text-2xl">{book.bookName}</h2>
                                            <p className="font-serif">By: {book.author}</p>

                                            <div className="flex items-center mt-3 gap-6">
                                                <div>
                                                    <h2><span className="font-extrabold ">Tag:</span> <span className="text-pink-600 font-semibold lg:ml-6">#{book.tags[0]}</span> <span className="text-pink-600 font-semibold lg:ml-8">#{book.tags[1]}</span> </h2>
                                                </div>
                                                <div>
                                                    <h2 className="flex items-center gap-1"><LuClock5 />Year of Publishing: {book.yearOfPublishing}</h2>
                                                </div>
                                            </div>


                                            <div className="flex items-center mt-3 mb-3 gap-4">
                                                <h2 className="flex items-center gap-2 lg:gap-1"><FaUserFriends className="text-gray-600"></FaUserFriends> Publisher: {book.publisher}</h2>
                                                <h2 className="flex items-center gap-2 lg:gap-1"><MdOutlineRestorePage />Page: {book.totalPages}</h2>
                                            </div>
                                            <hr />
                                            <div className="flex items-center mt-3 gap-4 lg:gap-10 ">
                                                <p className="bg-blue-100 text-blue-500 text-center rounded-3xl py-2 text-[10px] lg:text-[17px] px-2  lg:px-3 w-10 font-bold">Category: {book.category}</p>
                                                <p className="bg-orange-100 text-orange-500 text-center rounded-3xl py-2  text-[10px] lg:text-[18px] p-2 lg:px-3 w-4 font-bold">Rating: {book.rating}</p>
                                                <button className="btn rounded-3xl bg-pink-500 text-white">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    {/* new */}

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab font-extrabold text-[8px] lg:text-[16px] text-pink-600" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content mx-2 bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            wishBooks.map(wish=> <div key={wish.bookId} >
                                <div className="">
                                    <div className="card lg:card-side mt-10 p-4 lg:p-10 border border-gray-400 bg-base-100 shadow-xl">
                                        <figure><img className="lg:w-44" src={wish.image} alt="Album" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title font-serif font-bold text-2xl">{wish.bookName}</h2>
                                            <p className="font-serif">By: {wish.author}</p>

                                            <div className="flex items-center mt-3 gap-6">
                                                <div>
                                                    <h2><span className="font-extrabold ">Tag:</span> <span className="text-pink-600 font-semibold lg:ml-6">#{wish.tags[0]}</span> <span className="text-pink-600 font-semibold lg:ml-8">#{wish.tags[1]}</span> </h2>
                                                </div>
                                                <div>
                                                    <h2 className="flex items-center gap-1"><LuClock5 />Year of Publishing: {wish.yearOfPublishing}</h2>
                                                </div>
                                            </div>


                                            <div className="flex items-center mt-3 mb-3 gap-4">
                                                <h2 className="flex items-center gap-2 lg:gap-1"><FaUserFriends className="text-gray-600"></FaUserFriends> Publisher: {wish.publisher}</h2>
                                                <h2 className="flex items-center gap-2 lg:gap-1"><MdOutlineRestorePage />Page: {wish.totalPages}</h2>
                                            </div>
                                            <hr />
                                            <div className="flex items-center mt-3 gap-4 lg:gap-10 ">
                                                <p className="bg-blue-100 text-blue-500 text-center rounded-3xl py-2 text-[10px] lg:text-[17px] px-2  lg:px-3 w-10 font-bold">Category: {wish.category}</p>
                                                <p className="bg-orange-100 text-orange-500 text-center rounded-3xl py-2  text-[10px] lg:text-[18px] p-2 lg:px-3 w-4 font-bold">Rating: {wish.rating}</p>
                                                <button className="btn rounded-3xl bg-pink-500 text-white">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;