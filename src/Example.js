import { useState, createContext, useContext } from "react";

const SomeContext = createContext()

export const Parent = () => {
    const [userName, setUserName] = useState("hello1");
    return (
        <SomeContext.Provider value={{userName, setUserName}}>
        <div>
            {userName}
            <Child />
        </div>
        </SomeContext.Provider>  
    )
}

export const Child = () => {
    return (
        <div>
            <GrandChild />
        </div>
    )
}

export const GrandChild = () => {
    const {userName, setUserName} = useContext(SomeContext)
    return (
        <div>
            <button 
            onClick={() => {
                if (userName === "hello1") {
                    setUserName("sdbkfgh")
                } else {
                    setUserName("hello1")
                }
                }}>
                Click Me
                </button>
        </div>
    )
}