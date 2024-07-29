import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

import images from '../../../../data/images.js'


export default function ImageGallery(){
        const makeImages = () =>images.map((p,i)=><div key={i} className="d-flex flex-column mx-auto col-lg-3"><Image height={500} width={500} src={p.src} alt={p.name}/></div>)
    return(<>
            <div data-testid='shade' className="container col mx-auto ">
            <Carousel autoPlay infiniteLoop interval={5000}>
                {makeImages()}
            </Carousel>
            </div>
           </>)

}