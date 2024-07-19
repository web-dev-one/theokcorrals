import Link from 'next/link'
import '../global.scss'

export default function NavBar(){

    return(<>
             <div className="d-flex flex-column horseshade">
                <ul className='links mx-auto p-2'>
                    <Link name="home" className="px-2" href='/'>Home</Link>
                    <Link className="px-2" href='/shade'>Shade</Link>
                    <Link className="px-2" href='/barn'>Barn</Link>
                </ul>
             </div>
           </>)
}