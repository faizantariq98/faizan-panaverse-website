import Wrapper from "./Wrapper"
import Image from "next/image"

import HeroImage from '../../public/HeroPoster.png'

const Hero = () => {
  return (

    <section>
        <Wrapper>   

            <div className="flex flex-col md:flex-row px-2 bg-white mb-10 items-center">
                 <div className=" basis-1/2 px-2">
                    <h6 className="text-green-700 underline font-bold">President Initiative of Artificial Intelligence and Computing</h6>
                    <h1 className="font-bold text-5xl py-3">
                        Certified Web 3.0 and Metaverse Developer
                    </h1>
                    <p className="text-justify text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod sint ipsam amet id nam ducimus ab.
                    </p>
                    <p className="text-justify py-3 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi alias iste obcaecati architecto consequatur repellat, tempora asperiores impedit nemo porro eum aperiam official.
                    </p>
                    <button className="py-3 px-6 mt-4 text-center text-white rounded-full bg-blue-900 font-bold">
                        Learn More
                    </button>
                 </div>
                 <div className="basis-1/2 self-start h-full w-full ">
                    <Image src={HeroImage} alt={"Hero Image"} />
                 </div>
            </div>
        </Wrapper>
    </section>
    
  )
}

export default Hero