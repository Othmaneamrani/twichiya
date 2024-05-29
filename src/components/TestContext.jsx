import React, { createContext, useState } from 'react';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {

    const [test, setTest] = useState({ valeur: 0, string: "" });
    const [user,setUser] = useState({nom:"",age:0});
    const [postDetail, setPostDetail] = useState(null);

    return (
        <TestContext.Provider value={{ test, setTest, user, setUser, postDetail , setPostDetail }}>
            {children}
        </TestContext.Provider>
    );
};
