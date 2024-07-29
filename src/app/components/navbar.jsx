import Link from 'next/link'



export default function NavBar(){

    return(<>
             <span className='rye-regular d-flex flex-column justify-center'>
              <div className="d-flex flex-column horseshade">
                <ul className='links mx-auto p-2 mobile rye-regular'>
                    <Link name="home" className="px-3 moveup" href='/'>Home</Link>
                    <Link className="px-3 moveup" href='/shade'>Shade</Link>
                    <Link className="px-3 moveup" href='/barn'>Barn</Link>
                </ul>
             </div>
            
            </span>
           </>)
}