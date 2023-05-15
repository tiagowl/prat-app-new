import { create } from "zustand";
import { UserCreate } from "../../types/user";
import { subscribe } from "../../api/user";

type Store = {
    createUser: (data: UserCreate)=>void;
}

const userStore = create<Store>()((set)=>({
    createUser: (data: UserCreate)=>set((state)=>{

        subscribe(data).then(data => { data });

        return{}
    }),
}))

export default userStore;