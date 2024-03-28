import { toast } from "react-toastify";

const getStoreData = () =>{
    const storeData = localStorage.getItem('store-data');
    if(storeData){
        return JSON.parse(storeData);
    }
    return [];
}

const saveStoreData = bookid =>{
const storeDatas = getStoreData();
const exists = storeDatas.find(booksId => booksId === bookid);
if(!exists){
    storeDatas.push(bookid);
    localStorage.setItem('store-data', JSON.stringify(storeDatas));
    toast.success("Books Added to Read List📄", { theme: "colored" })
}
else{
    storeDatas.pop(bookid);
    toast.error("You have Already Read this Book " , { theme: "colored" })
}
}


export {getStoreData, saveStoreData};