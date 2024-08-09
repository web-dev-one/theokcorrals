import Layout from "./Layout/layout";
import Image from "next/image";
import ImageGallery from "./ImageGallery/ImageGallery";
import images from '../../../data/barnimages.js'

export default function OkCBarn(){

    return(<>
            <div className="d-flex flex-column mx-auto">
            <h1 className="mx-auto">Steel Barns</h1>
            <span className="mx-auto">
                <Image src='/cee_purlin-8_x_2_1_2_cee_purlin.jpg' width={100} height={100} alt="Steel Barn" />
                <Image src='/Cpanel.jpg' width={100} height={100} alt="Steel Barn" />
            </span>
            <ImageGallery images={images} />
            </div>
           </>)
}