

export default function Footer(){
    const year = new Date().getFullYear();


    return(<>
            <footer data-testid="footer" className="western container-fluid">
                <div className="mx-auto text-center">
                <p className="pt-8 lg:pt-16 sm:w-3/4 w-screen mx-auto text-center">
                 © 2006-{year} Ok-Corrals LLC. All rights reserved.
                 <br />
                 520.730.7020 | Phoenix, AZ
                </p>
                </div>
            </footer>
          </>)
}