import { create } from "zustand";

type State = {
    name: string,
    adress:{
        street:string,
        number:string,
        complement?:string
        district:string,
        city:string,
        state:string
    }
}

type Actions = {
    setName: (name: State["name"]) => void
    setAdress: (adress: State["adress"]) => void
}

const inicialState: State = {
    name:"",
    adress:{
        street:"",
        number:"",
        complement:"" ,
        district:"",
        city:"",
        state:""
    }
}

export const useCheckoutStore = create<State & Actions>()(set => ({
    ...inicialState,
    setName: (name) => set(state => ({...state, name})),
    setAdress:(adress) => set(state => ({...state, adress}))
}))