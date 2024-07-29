import Link from 'next/link'
import Image from 'next/image'

const mybbb = "https://www.bbb.org/search?find_country=USA&find_latlng=33.515822%2C-112.088177&find_loc=Phoenix%2C%20AZ&find_text=OK%20Corrals%20LLC&page=1&sort=Name"
export default function BBB(){

    return(<>
            {/* <h1 className="mb-0 pb-0 bbb kal text-primary"><strong><Link rel="nofollow" target="_blank" passHref={true} href={mybbb}>A+ Rating with Better Business Bureau</Link></strong></h1> */}
            <div className='my-0 mx-auto'>
            <Link rel="nofollow" target="_blank" passHref={true} href={mybbb}>
            <Image 
                src='/bbb.png'
                width={220}
                height={200}
                alt='A+ Rating with Better Business Bureau'
            />
            </Link>
            </div>
           </>)
}