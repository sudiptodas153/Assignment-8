import { Link } from "react-router-dom";

const Bannar = () => {
    return (
        <section className="container mx-auto">
            <div className="rounded-3xl flex justify-center lg:gap-28 py-24 px-10 mx-2 bg-slate-100 items-center">
                <div>
                    <h2 className="text-3xl lg:text-5xl text-black font-serif font-semibold ">Books to freshen up <br /> <span className="mt-10 ">your bookshelf.</span></h2>
                    <p className="mt-10">There are numerous books that can help refresh the mind and provide <br /> valuable insights and perspectives</p>
                    <Link to={`/listed`}><button className="btn mt-8 bg-lime-500 px-8 font-extrabold text-white">View The List</button></Link>
                </div>
                <div><img src="/images-removebg-preview.png" alt="" /></div>
            </div>

        </section>
    );
};

export default Bannar;