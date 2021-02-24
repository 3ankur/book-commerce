
import { BookType } from "./redux/actions/types";

const API_END_POINT = 'http://localhost:3000'

export const loadBookList = async () =>{
    try{
        const res = await fetch(`${API_END_POINT}/books`);
        const data = await res.json();
        return data;
    }catch(e){
         throw new Error('Failed to load data');
    }
}

export const loadBookDetails = async (id: string | number) =>{
    try{
        const res = await fetch(`${API_END_POINT}/books/${id}`);
        const data = await res.json();
        return data;
    }catch(e){
        throw new Error('Failed to load data');
    }
}

export const addBookToCart = async (book: BookType) =>{
    try{
        const res = await fetch(`${API_END_POINT}/cart`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book) 
        });
        const data = await res.json();
        return data;
    }catch(e){
        throw new Error('Api is not responding');
    }
}

export const removeBookFromCart = async (book: BookType)=>{
    try{
        const res = await fetch(`${API_END_POINT}/cart/${book.id}`,{
            method: 'DELETE',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book) 
        });
        const data = await res.json();
        return data;
    }catch(e){
        throw new Error('Api is not responding');
    }
}

export const getCartItems = async () =>{
    try{
        const res = await fetch(`${API_END_POINT}/cart`);
        const data = await res.json();
        return data;
    }catch(e){
        throw new Error(e);
    }
}

export const updateAddress = async (address : string)=>{
    try{
        const res = await fetch(`${API_END_POINT}/address`,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({address}) 
        });
        const data = await res.json();
        return data;
    }catch(e){
        throw new Error('Api is not responding');
    }
}

export const getAddress = async () =>{
    try{
        const res = await fetch(`${API_END_POINT}/address`);
        const data = await res.json();
        return data;
    }catch(e){
        throw new Error(e);
    }
}

export const updateQuantity = async (book:BookType)=>{
    try{
        const res = await fetch(`${API_END_POINT}/cart/${book.id}`,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book) 
        });
        const data = await res.json();
        return data;
    }catch(e){

    }
}