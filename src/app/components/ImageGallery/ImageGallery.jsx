import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'


export default function ImageGallery({images}){
        const makeImages = () =>images.map((p,i)=><div key={i} className="mx-auto col-lg-3 w-100"><Image height={500} width={500} src={p.src} alt={p.name}/></div>)
    return(<>
            <div data-testid='shade' className="container col mx-auto w-75">
            <Carousel autoPlay infiniteLoop interval={4000}>
                {makeImages()}
            </Carousel>
            </div>
           </>)

}