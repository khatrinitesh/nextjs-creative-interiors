import React from 'react'

const Contact = () => {
  return (
    <div className="customContent">
      <div className="container mx-auto">
       <h2 className="text-fs32 font-monsterratB text-primaryDark">Contact</h2>
       <form action="#" method="POST">
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your Name"
      className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Your Email"
      className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      rows={5}
      placeholder="Your Message"
      className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
      defaultValue={""}
    />
  </div>
  <div className="mb-4">
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
    >
      Send Message
    </button>
  </div>
</form>

      </div>  
    </div>
  )
}

export default Contact