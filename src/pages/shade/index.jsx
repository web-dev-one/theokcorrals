import 'bootstrap/dist/css/bootstrap.css'
import '../../app/global.scss'
import '../styles/index.scss'
import Layout from "../../app/components/Layout/layout"
import BBB from '../../app/components/BBB'
import Materials from '../../app/components/Materials'
import ImageGallery from '../../app/components/ImageGallery/ImageGallery'
import Link from 'next/link'
import images from '../../../data/shadeimages.js'


export default function Shade(){
   
    
    return(<>
            <Layout>
                <div className='flex-column open'>
                    <div className='open'>
                    <p className='rolling'>
                    <span>At OK Corrals, we are passionate about enhancing the well-being of animals through exceptional shade solutions.</span>
                    </p>
                    <p className='rolling'>
                        <span>Since 2006, our mission has been to provide top-quality, custom-built shade structures that protect livestock and pets from the harsh Arizona sun.</span>
                    </p>
                    <p className='rolling'>
                        <span>Our commitment is to deliver superior shade options, including mare motels and horse shelters, that ensure comfort and longevity for animals and peace of mind for their owners.</span>
                    </p>
                    <p className='rolling'>
                    <span><Link className="mx-auto" href="/about">
                    Read More</Link></span>
                    </p>
                    <BBB />
                    <Materials />
                    <ImageGallery images={images} />
                    </div>
                </div>
            </Layout>
           </>)
}