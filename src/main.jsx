import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './componant/Root/Root';
import Home from './componant/Home/Home';
import ErrorPage from './componant/Navbar/ErrorPage/ErrorPage';
import BookDeatils from './componant/BookDeatils/BookDeatils';
import ListedBooks from './componant/ListedBooks/ListedBooks';
import PageToRead from './componant/PageToRead/PageToRead';
import Feedback from './componant/Feedback/Feedback';
import AboutUs from './componant/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/pages",
        element: <PageToRead></PageToRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/feedback",
        element: <Feedback></Feedback>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/book/:bookid",
        element: <BookDeatils></BookDeatils>,
        loader: () => fetch('/books.json')
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
