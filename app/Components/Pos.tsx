import Wrapper from "./Wrapper"

const Pos = () => {
  return (
    <section>
        <Wrapper>
        <div className="flex flex-col py-4 px-2 bg-gradient-to-r from-blue-100 via-gray-50 to-white shadow-lg shadow-blue-100 mb-6 rounded-lg">
            <h6 className="text-blue-700 font-bold text-sm py-3 px-2">PROGRAM OF STUDIES</h6>

            <h1 className="text-4xl font-bold px-2">Core Courses</h1>
            <h1 className="text-4xl font-bold px-2">{"(Common in All Specializations): "}</h1>
            
            <p className=" py-5 text-gray-600 basis-1/2 px-2 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vero facilis assumenda excepturi veritatis perspiciatis.</p>

            <button className=" py-3 px-6 mt-4 text-center text-white rounded-full bg-blue-900 font-bold self-start ml-2"> Learn More</button>
        </div>
        </Wrapper>
    </section>
  )
}

export default Pos