const Hero = () => {
  return (
    <div className=" border-4 flex flex-col h-full">
      <section id="Home" className="bg-gray-200 w-full gap-3 md:gap-6 flex flex-col p-8 md:py-28 md:px-16 ">
        <h1 className="md:text-4xl text-3xl font-bold ">Digital Advertisement That Works</h1>
        <p className="text-lg ">We help businesses grow with effective digital ad campaigns</p>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white w-fit py-2 px-8 rounded-full font-bold">Get Started</a>
      </section>
      <section id="Services" className="bg-white flex p-8 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-8 shadow hover:bg-gray-200">
              <i className=" text-blue-500 text-4xl mb-6"></i>
              <h2 className="text-2xl font-bold mb-4">Data-Driven Approach</h2>
              <p className="text-gray-700 mb-4">We leverage data to optimize your ad performance and target the right audience.</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Learn More</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow hover:bg-gray-200">
              <i className=" text-yellow-500 text-4xl mb-6"></i>
              <h2 className="text-2xl font-bold mb-4">Creative Solutions</h2>
              <p className="text-gray-700 mb-4">Our talented team crafts engaging ad creatives that capture attention and drive results.</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Learn More</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow hover:bg-gray-200">
              <i className=" text-red-500 text-4xl mb-6"></i>
              <h2 className="text-2xl font-bold mb-4">Effective Advertising</h2>
              <p className="text-gray-700 mb-4">We create impactful ad campaigns to reach your target audience and maximize ROI.</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Learn More</a>
            </div>
          </div>
      </section>

      <section className="bg-gray-200 p-8 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow hover:bg-gray-300">
              <img src="https://source.unsplash.com/featured/1280x720/?digital" alt="Digital feature" className="float-right w-1/3 rounded-lg ml-8" />
              <h2 className="text-2xl font-bold mb-4">Data-Driven Approach</h2>
              <p className="text-gray-700 mb-4">We leverage data to optimize your ad performance and target the right audience.</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Learn More</a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow hover:bg-gray-300">
              <img src="https://source.unsplash.com/featured/1280x720/?creative" alt="Creative feature" className="float-left w-1/3 rounded-lg mr-8" />
              <h2 className="text-2xl font-bold mb-4">Creative Solutions</h2>
              <p className="text-gray-700 mb-4">Our talented team crafts engaging ad creatives that capture attention and drive results.</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Learn More</a>
            </div>
          </div>
      </section>


    </div>
  )
}

export default Hero;
