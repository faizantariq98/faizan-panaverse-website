import Wrapper from "./Wrapper"
import Image from "next/image"

import HeroImage from '../../public/HeroPoster.png'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
interface herodatatype {
    fields: {
        title: string,
        description: string,
        heroImage: object
      }
}

const getHeroData = async ()=>{
    try{
        const heroSecData = await fetch('https://cdn.contentful.com/spaces/x6eewvg9w6p3/environments/master/entries/6AvnYkoyEjYLar6YRtSW2j?access_token=5RealmlGsXBDk80YvoPbdLbnYBf6166TIHtOwfTIdWo');

        if(!heroSecData.ok){
            console.log("Failed to Load data")
            throw new Error("Failed to Load Data");
        }

        return heroSecData.json();

    }catch(err){
        console.log(err);
    }

}

const Hero = async () => {
    const heroData:herodatatype = await getHeroData();
    console.log(heroData)
  return (

    <section>
        <Wrapper>   

            <div className="flex flex-col md:flex-row px-2 bg-white mb-10 items-center">
                 <div className=" basis-1/2 px-2">
                    <h6 className="text-green-700 underline font-bold">President Initiative of Artificial Intelligence and Computing</h6>
                    <h1 className="font-bold text-5xl py-3">
                        {heroData.fields.title}
                    </h1>
                    <p className="text-justify text-gray-500">
                       {heroData.fields.description}
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