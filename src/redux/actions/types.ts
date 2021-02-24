
export type BookType={
    id: string,
    title: string,
    description: string,
    price: string,
    coverImage:string,
    author: string
    ISBN: string,
    pages: string,
    quantity?:number
}

export type ActionPayload = {
    type: string,
    payload: any 
}

export type BookCartAction ={
    readonly type: string,
    payload: any 
}
