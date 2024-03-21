

const Features = () => {
  return (
    <div>
        <section className="bg-gray-200 p-8 md:p-16">
        <h2 className="md:text-3xl text-xl font-bold mb-6">Recent Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow hover:bg-gray-400">
            <h3 className="text-xl font-bold mb-4">10 Tips for Effective Digital Advertising</h3>
            <p className="text-gray-700 mb-4">Learn the best practices for running successful digital ad campaigns and driving results.</p>
            <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Read More</a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow hover:bg-gray-400">
            <h3 className="text-xl font-bold mb-4">The Power of Social Media Advertising</h3>
            <p className="text-gray-700 mb-4">Discover how social media advertising can help your business reach a larger audience.</p>
            <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Read More</a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow hover:bg-gray-400">
            <h3 className="text-xl font-bold mb-4">Optimizing Your Ad Campaigns for Mobile</h3>
            <p className="text-gray-700 mb-4">Learn why mobile optimization is crucial for the success of your digital ad campaigns.</p>
            <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Read More</a>
            </div>
        </div>

    </section>
<div id="About">
    <section className="bg-white p-8 md:p-16">
      <h2 className="md:text-3xl text-xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 rounded-lg p-8 shadow hover:bg-gray-300">
          <h3 className="text-xl font-bold mb-4">How can I get started with LIBAN's digital advertising services?</h3>
          <p className="text-gray-700 mb-4">Getting started is easy. Simply fill out our contact form, and our team will get in touch with you</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 shadow hover:bg-gray-300">
          <h3 className="text-xl font-bold mb-4">How long does it take to see results from digital advertising?</h3>
          <p className="text-gray-700 mb-4">Results may vary depending on the campaign and goals, but you can expect to see initial results within a few weeks.</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 shadow hover:bg-gray-300">
          <h3 className="text-xl font-bold mb-4">Can you target specific demographics?</h3>
          <p className="text-gray-700 mb-4">Results may vary depending on the campaign and goals, but you can expect to see initial results within a few weeks.</p>
        </div>
      </div>
  </section>
  <section className="bg-gray-200 p-8 md:p-16">
      <h2 className="md:text-3xl text-xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-8 shadow ">
          <img src="img/RobPassport.jpg" alt="Team member" className="rounded-full w-16 h-16 mb-4"/>
          <h3 className="text-xl font-bold">Roba Mengesha</h3>
          <p className="text-gray-700 mb-2">CEO</p>
          <div className="flex space-x-2">
          <a href="www.facebook.com"><img src="img/facebook.png" alt="" className="w-7 h-7" /></a>
            <a href="www.twitter.com"><img src="img/twitter.png" alt=""className="w-6 h-6" /></a>
            <a href="www.linkedin.com"><img src="img/linkedin.png" alt="" className="w-7 h-7" /></a>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow ">
          <img src="" alt="Team member" className="rounded-full w-16 h-16 mb-4"/>
          <h3 className="text-xl font-bold">Mohammed Abdela</h3>
          <p className="text-gray-700 mb-2">Marketing Manager</p>
          <div className="flex space-x-2">
          <a href="www.facebook.com"><img src="img/facebook.png" alt="" className="w-7 h-7" /></a>
            <a href="www.twitter.com"><img src="img/twitter.png" alt=""className="w-6 h-6" /></a>
            <a href="www.linkedin.com"><img src="img/linkedin.png" alt="" className="w-7 h-7" /></a>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow ">
          <img src="" alt="Team member" className="rounded-full w-16 h-16 mb-4"/>
          <h3 className="text-xl font-bold">Mulisa Tadesse</h3>
          <p className="text-gray-700 mb-2">Creative Director</p>
          <div className="flex space-x-2">
            <a href="www.facebook.com"><img src="img/facebook.png" alt="" className="w-7 h-7" /></a>
            <a href="www.twitter.com"><img src="img/twitter.png" alt=""className="w-6 h-6" /></a>
            <a href="www.linkedin.com"><img src="img/linkedin.png" alt="" className="w-7 h-7" /></a>
          </div>
        </div>
      </div>

  </section>
</div>

</div>
  )
}

export default Features;
