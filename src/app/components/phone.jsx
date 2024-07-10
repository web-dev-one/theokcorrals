import '../global.scss'
import Image from 'next/image'


const number = "520.730.7020"

export default function Phone() {
  return (
    <div 
      className="flex justify-center phone"
      style={{ backgroundColor: "#DACCBA", color: "#4D4949" }}
    >
      <Image 
        src="/phone.png"
        width={20}
        height={20}
        alt="phone"
       />
      <a data-testid="phone" href={`tel:${number}`} >
        <span className="font-bold">Call us</span> {number}
      </a>
    </div>
  );
}
