
import Wrapper from "./Wrapper"
import Image from "next/image"
import preFooterImage from "public/img.png"
import frame1 from '../../public/Frame1.png'
import frame2 from '../../public/Frame2.png'
import frame3 from '../../public/Frame3.png'
import frame4 from '../../public/Frame4.png'


const Prefooter = () => {
  return (
    <Wrapper>
        <div className="mt-10 mb-5 px-2 flex justify-center">
            <div className="md:flex flex-col lg:flex-row justify-between">
            <div className="max-w-lg px-2"> 
                <Image src={preFooterImage} alt={""}/>
            </div>
            <div className="my-14 md:max-w-xl px-2">               {/*Right*/}
                <h1 className="text-3xl pb-3 font-bold">The Outcome for Participants of the Program</h1>
                <p className="text-md text-gray text-justify">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan&apos;s software exports.</p>
                <div className="grid grid-cols-2 py-5 gap-4">
                    <Image src={frame1} alt={""}/>
                    <Image src={frame2} alt={""}/>
                    <Image src={frame3} alt={""}/>
                    <Image src={frame4} alt={""}/>
                </div>
            </div>
            </div>
            
        </div>
    </Wrapper>
  )
}

export default Prefooter