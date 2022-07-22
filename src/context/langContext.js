import React, { createContext, useState } from 'react'

export const langContext = createContext();
const supportedLang = ['FR', 'ES', 'EN']
let browserLang = navigator.language.slice(0, 2).toLocaleUpperCase();
console.log(browserLang)

if (supportedLang.indexOf(browserLang) === -1) {
    alert("Langue not supported");
    browserLang = "EN";
}

const ContextProvider = props => {
    const [lang, setLang] = useState(browserLang);

    const toogleLang = lang => {
        setLang(lang);
    }
    return (
        <langContext.Provider value={{lang, toogleLang}}>
            {props.children}
        </langContext.Provider>
    )
}

export default ContextProvider
