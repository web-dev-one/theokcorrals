import React, {useEffect} from "react";
import MyHead from "../head";
import Footer from "../footer";


export default function Layout({children, props, style}){


    return(<>
            <MyHead style={style} />
                {children}
            <Footer />
           </>)

}