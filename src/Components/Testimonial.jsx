

const Testimonial = () => {
  return (
    <div>
    <section className="bg-white p-8 md:p-16">
    <div className="container mx-auto">
      <h2 className="md:text-3xl text-xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   
        <div className="p-8 bg-gray-100 rounded-md text-center">
          <i className=" text-2xl mb-4"></i>
          <p className="mb-8"> LIBAN has transformed our business with their exceptional digital advertising services. We have seen a significant increase in leads and sales.</p>
          <p className="font-semibold">Milkessa</p>
          <p className="text-gray-600">CEO, Milki Company</p>
        </div>

        <div className="p-8 bg-gray-100 rounded-md text-center">
          <i className="text-2xl mb-4"></i>
          <p className="mb-8">Working with LIBAN has been a pleasure. Their team is professional, creative, and always delivers exceptional results.</p>
          <p className="font-semibold">Miidhaga Hunduma</p>
          <p className="text-gray-600">CTO, Milto Company</p>
         
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Testimonial;
