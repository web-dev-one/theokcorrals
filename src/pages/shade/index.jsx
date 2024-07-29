import 'bootstrap/dist/css/bootstrap.css'
import '../../app/global.scss'
import '../styles/index.scss'
import Layout from "../../app/components/Layout/layout"
import ImageGallery from '../../app/components/ImageGallery/ImageGallery'


export default function Shade(){

    return(<>
          
            <Layout>
                <div className='d-flex flex-column w-92 mx-auto' >
                     {/* <Image     
                        style={ {justifyContent: 'center', margin: 'auto'}}
                        src="/Horse-Shade-Maricopa-County-AZ-logo_inPixio.png"
                        width={300}
                        height={300}
                        alt="Ok-Corrals LLC logo"
                        loading='lazy'
                    /> */}
                    <ImageGallery />
                 <h1 className='mx-auto rye-regular'>No Shade</h1>
                </div>
            </Layout>
           
           </>)
}