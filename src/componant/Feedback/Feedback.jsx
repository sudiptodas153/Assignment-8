import { useState } from "react";


const Feedback = () => {

    const [bio, setBio] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
      
    }

    const handleChange = e => {
        
        setBio(e.target.value);
    }
    return (
        <div className="container mx-auto ">
            <div className="lg:flex ml-2 gap-4">
                <div>
                <div className="text-start mt-32">
                <div className="rating rating-lg rating-half">
                    <input type="radio" name="rating-10" className="rating-hidden" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className=" ">
                <textarea onChange={handleChange} className="border p-3 rounded-xl border-pink-600" name="" id="new-comment" cols="50"  placeholder="write something....." rows="10"></textarea>
                </div>
                <button className="btn bg-lime-400 ">Submit</button>
            </form>
                </div>
                <div className="flex-1  rounded-3xl bg-pink-100">
                    <h2 className="text-center font-extrabold mt-3 text-xl">Feedback</h2>
                   <hr />
                    <p className="px-4 py-3 font-serif">{bio}</p>
                </div>
            </div>
        </div>

    );
};
<script src="/src/componant/Feedback/Feed/Feed.js"></script>
export default Feedback;