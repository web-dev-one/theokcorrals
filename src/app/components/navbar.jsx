import Link from 'next/link'
import style from '../global.scss'


export default function NavBar(){

    return(<>
             <span className='rye-regular d-flex flex-column justify-center'>
              <div className="d-flex flex-column horseshade">
                <ul className='links mx-auto p-2 mobile'>
                    <Link name="home" className={`${style.className} px-3 moveup rojo`} href='/'>Home</Link>
                    <Link className="px-3 moveup" href='/shade'>Shade</Link>
                    <Link className="px-3 moveup" href='/barn'>Barn</Link>
                </ul>
             </div>
            
            </span>
           </>)
}