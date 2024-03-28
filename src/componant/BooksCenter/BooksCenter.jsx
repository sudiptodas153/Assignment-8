import { useEffect, useState } from "react";
import Books from "../Books/Books";

const BooksCenter = () => {
    const [books, setBooks] = useState([]);
    const [data, setData] = useState(6);


    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="container mx-auto mt-20">
                <h2 className="text-4xl text-center font-extrabold mb-5">Books</h2>
                <p className="text-center font-normal">Our Books are very good for mind fresh and we have many many important books.</p>
            </div>
            <div className="container mx-auto mt-10  lg:gap-10 lg:grid lg:grid-cols-3">
                {
                    books.slice(0, data).map(book => <Books key={book.bookid} book={book}></Books>)
                }
            </div>
            <div className={data === books.length ? 'hidden' : ''}>
                <div className="text-center my-4">
                    <button onClick={() => setData(books.length)} className="btn text-white bg-rose-500">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCenter;