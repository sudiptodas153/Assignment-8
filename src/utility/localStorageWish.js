import { toast } from "react-toastify";

const getStoreWishlist = () =>{
    const storeWish = localStorage.getItem('wish-data');
    if(storeWish){
        return JSON.parse(storeWish);
    }
    return [];
}

const saveStoreWishlist = bookid =>{
const storeWishlist = getStoreWishlist();
const exists = storeWishlist.find(booksId => booksId === bookid);
if(!exists){
    storeWishlist.push(bookid);
    localStorage.setItem('wish-data', JSON.stringify(storeWishlist));
    toast.success("Books Added to  Wishlist📄", { theme: "colored" })
}
else{
    storeWishlist.pop(bookid);
    toast.error("You have Already Added this Book " , { theme: "colored" })
}
}


export {getStoreWishlist, saveStoreWishlist};