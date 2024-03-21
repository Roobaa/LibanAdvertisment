

const ContactUS = () => {
  return (
    <div id='ContactUS'>
        <section className="bg-white flex items-center flex-col md:flex-row gap-4 md:gap-0 p-8 md:p-16">
            <h2 className="md:text-3xl font-bold w-full  ">Subscribe to Our Newsletter</h2>
            <form className="flex items-center  w-full">
                <input type="email" placeholder="Enter your email" className="bg-gray-100 py-2 px-4 w-2/3 rounded-l-md focus:outline-none" required/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md">Subscribe</button>
            </form>
        </section>

        <section className="bg-gray-200 p-8 md:p-16">

                    <h2 className="md:text-3xl text-xl font-bold mb-6">Contact Us</h2>
                    <form >
                    <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                                    <input type="text" id="name" className="w-full bg-gray-100 py-2 px-4 rounded-md focus:outline-none" required/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                                        <input type="email" id="email" className="w-full bg-gray-100 py-2 px-4 rounded-md focus:outline-none" required />
                                    </div>
                                    <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                                    <textarea id="message" className="w-full bg-gray-100 py-2 px-4 rounded-md focus:outline-none" rows="4" required></textarea>
                                    </div>
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
                    </form>
             

        </section>
      
    </div>
  )
}

export default ContactUS

