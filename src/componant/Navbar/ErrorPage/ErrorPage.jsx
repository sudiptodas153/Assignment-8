import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center m-48">
            <div className=" bg-yellow-500 w-96 h-72 ">
                <h2 className="text-center p-10 text-3xl font-extrabold">Opps!!</h2>
                <h2 className="text-center text-3xl font-extrabold">404</h2>

                <h2 className="text-center text-xl font-bold">This page is unavailable.</h2>
                <h2 className="lg:text-end lg:px-10 font-bold relative top-8 lg:top-20 left-4"><Link to="/">Go Back Home</Link></h2>
            </div>
            
        </div>
        </div>
    );
};

export default ErrorPage;