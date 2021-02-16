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