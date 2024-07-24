import Image from 'next/image'
import Bunger from '/public/BungerSteel.png'
import AZSteel from '/public/AZSteel.jpg'
import LPSteel from '/public/LP.png'

const companies = [{name: 'Bunger Steel', img: Bunger, alt: 'Bunger Steel LLC'}, {name: 'AZ Steel', img: AZSteel, alt: 'AZ Steel'}, {name: 'LP Steel', img: LPSteel, alt: 'LP Steel'}]

export default function Materials(){

    const makeParts = () =>{
            return companies.map((c, i)=><span key={i}><Image src={c.img} alt={c.alt} width={100} height={100}/></span>)
    }
    return(<>
            <div className='my-0'>
            {makeParts()}
            </div>
          </>)
}