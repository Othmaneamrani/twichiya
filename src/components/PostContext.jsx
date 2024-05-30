import {createContext, useState} from "react";

export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [postDet,setPostDet] = useState(null);


    return(
        <PostContext.Provider value={{postDet,setPostDet}}>
            {children}
        </PostContext.Provider>
    );
}


