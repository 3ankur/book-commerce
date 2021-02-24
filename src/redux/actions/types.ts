
export type BookType={
    id: string,
    title: string,
    description: string,
    price: string,
    coverImage:string,
    author: string
    ISBN: string,
    pages: string
}

export type ActionPayload = {
    type: string,
    payload: unknown 
}

export type BookCartAction ={
    readonly type: string,
    payload: any 
}
