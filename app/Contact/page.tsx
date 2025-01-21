import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6ece1] pt-[13vh] pb-[3vh]">
      <div className="w-[90%] max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-[#c6a48e] mb-6 text-center">Get in Touch</h1>
        <form action="/api/contact" method="POST" className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-[#c6a48e] font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-[#c6a48e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6a48e]"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#c6a48e] font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-[#c6a48e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6a48e]"
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-[#c6a48e] font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full px-4 py-2 border border-[#c6a48e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6a48e]"
            />
          </div>
          {/* Bouquet Type */}
          <div>
            <label htmlFor="bouquet" className="block text-[#c6a48e] font-medium mb-2">
              Bouquet/Event Type
            </label>
            <select
              id="bouquet"
              name="bouquet"
              className="w-full px-4 py-2 border border-[#c6a48e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6a48e]"
            >
              <option value="wedding">Wedding Bouquet</option>
              <option value="birthday">Birthday Flowers</option>
              <option value="anniversary">Anniversary Arrangement</option>
              <option value="other">Custom Request</option>
            </select>
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[#c6a48e] font-medium mb-2">
              Message/Request
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message or Specific Request"
              className="w-full px-4 py-2 border border-[#c6a48e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6a48e]"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#c6a48e] text-white font-bold rounded-lg hover:bg-[#b08e7b] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
