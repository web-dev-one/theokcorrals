import Image from 'next/image'

export default function Footer(){
    const year = new Date().getFullYear();


    return(<>
            <div className='d-flex flex-column container-fluid'>
             <span className="centerMobile">
             <Image     
                        style={ {position: 'fixed', bottom: 0}}
                        src="/Horse-Shade-Maricopa-County-AZ-logo_inPixio.png"
                        width={400}
                        height={400}
                        alt="Ok-Corrals LLC logo"
                        loading='lazy'
                    />
            </span>
            <footer data-testid="footer" className="western container-fluid">
                <div className="mx-auto text-center">
                <p className="pt-8 lg:pt-16 sm:w-3/4 w-screen mx-auto text-center">
                 © 2006-{year} Ok-Corrals LLC. All rights reserved.
                 <br />
                 520.730.7020 | Phoenix, AZ
                </p>
                </div>
            </footer>
            </div>
          </>)
}