import Wrapper from "./Wrapper"

const gridData =[
  {
    quarter:"Quarter I",
    content:"CS 101: Object Oriented Programming using TypeScript",
    order:"1"
  },
  {
    quarter:"Quarter II",
    content:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    order:"2"
  },
  {
    quarter:"Quarter III",
    content:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    order:"3"
  }
]

const GridBar = () => {
  return (
    <Wrapper>
    <section className="grid md:grid-cols-3 my-20 gap-x-4 gap-y-4 justify-center px-2">
      {
       gridData.map((data)=>
          <div className="border border-gray-300 rounded-md relative p-8 -z-10" key={data.order}>
          <h5 className="font-bold text-sm text-black pb-3">{data.quarter}</h5>
          <p className="py-3 text-justify">{data.content}</p>
          <span className="absolute text-9xl top-3 right-10 -z-10 font-bold text-gray-300">{data.order}</span>
        </div>
       )
      }
    </section>
    
    </Wrapper>
  )
}

export default GridBar

