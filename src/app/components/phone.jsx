import '../global.scss'
import Image from 'next/image'


const number = "520.730.7020"

export default function Phone() {
  return (
    <div 
      className="justify-center phone fs-6 rye-regular"
      style={{ backgroundColor: "#DACCBA", color: "#4D4949" }}
    >
      <Image 
        src="/phone.png"
        width={20}
        height={20}
        alt="phone"
       />
      <a data-testid="phone" href={`tel:${number}`} className='' >
        <span className="d-inline-flex align-top fs-6 rye-regular
        ">Call us </span></a>&nbsp;{number}
    </div>
  );
}
