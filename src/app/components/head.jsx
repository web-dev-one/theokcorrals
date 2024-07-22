import Head from 'next/head'
import Phone from "./phone"
import NavBar from "./navbar"

export default function MyHead(){

    return(<>
            <Head>
                <title>Shade Barns SheadRow Fabrication</title>
                <meta name="description" content="Discover Ok-Corrals for top-notch Mare Motels and Pipe Corrals in Southern Arizona. We offer guaranteed quality with shade, sheds, stalls, arenas, and more for your horses and livestock." />
                <meta name="keywords" content="Livestock shade, Mare Motels, Pipe Corrals, Horse stalls, Livestock shelters, Southern Arizona, Shade structures, Equestrian equipment, Hay barns, Horse arenas" />
                <meta name="robots" content="index, follow" /> {/* Directs search engines to index the page and follow links */}
                <meta http-equiv="content-language" content="en-US" /> {/* Specifies the language of the content */}
                <meta name="author" content="Ok-Corrals" /> {/* Indicates the author of the content */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Ensures proper rendering and scaling on mobile devices */}
                <meta property="og:title" content="Best Quality Livestock Shade in Southern Arizona - Ok-Corrals" /> {/* Open Graph title for social media */}
                <meta property="og:description" content="Discover Ok-Corrals for top-notch Mare Motels and Pipe Corrals in Southern Arizona. We offer guaranteed quality with shade, sheds, stalls, arenas, and more for your horses and livestock." /> {/* Open Graph description for social media */}
                <meta property="og:type" content="website" /> {/* Open Graph type of content */}
                <meta property="og:url" content="https://www.theokcorrals.com" /> {/* Open Graph URL */}
                <meta property="og:image" content="https://www.theokcorrals.com/og-image.jpg" /> {/* Open Graph image for social media */}
            </Head>
            <div className="mx-auto mt-0 pt-0 cpanel">
                <Phone />
                <NavBar />
            </div>
           </>)
}