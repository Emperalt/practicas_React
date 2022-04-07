
export interface optionElement{

    id: string,
    name: string
    value: string
}

export interface elementApi{

    name: string,
    type: string,
    class:string,
    side: string,
    // setStage?:CallableFunction,
    options?: optionElement[],
    miFunction?: CallableFunction
}

export interface Personaje {
    _id:  string,
    title: string,
    body: string,
    image: string,
    category: string,
    idAuthor: string,
    createdAt: string,
    updatedAt: string
}