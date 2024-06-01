import {createContext, useState} from "react";

export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [postDet,setPostDet] = useState(null);
    const [postsList,setPostsList] = useState([]);


    return(
        <PostContext.Provider value={{postDet,setPostDet , postsList, setPostsList}}>
            {children}
        </PostContext.Provider>
    );
}


