import Phone from "./phone"
import NavBar from "./navbar"

export default function Head(){

    return(<>
            <div className="mx-auto mt-0 pt-0 cpanel">
                <Phone />
                <NavBar />
            </div>
           </>)
}