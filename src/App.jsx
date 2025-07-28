import React from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <div className="min-h-screen font-sans bg-white text-gray-800">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">ABC</span>
              </div>
              <span className="ml-2 font-bold text-xl">Animal Bite Center</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
              <a href="#services" className="hover:text-blue-600 transition">
                Services
              </a>
              <a href="#about" className="hover:text-blue-600 transition">
                About Us
              </a>
              <a href="#blog" className="hover:text-blue-600 transition">
                Blog & Tips
              </a>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 px-4 shadow-lg">
              <div className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#blog"
                  className="hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog & Tips
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Your Trusted Animal Bite Care Center
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Providing fast, reliable, and professional care for animal bites
              and rabies prevention.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md"
            >
              Book an Appointment
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="max-w-3xl mx-auto bg-green-50 rounded-xl p-8 shadow-sm">
              <p className="text-lg text-center">
                We are committed to protecting the community by providing expert
                care, vaccinations, and guidance for anyone exposed to animal
                bites. Our team of healthcare professionals is dedicated to
                ensuring your safety and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Rabies Vaccination
                </h3>
                <p className="text-gray-600">
                  Preventive and post-exposure rabies vaccinations administered
                  by our medical professionals.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Animal Bite Treatment
                </h3>
                <p className="text-gray-600">
                  Immediate care and treatment for animal bites to prevent
                  infection and complications.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Expert advice on animal bite management and rabies prevention
                  from our specialists.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Follow-Up Care</h3>
                <p className="text-gray-600">
                  Comprehensive follow-up services to monitor your recovery and
                  ensure complete protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog & Tips Section */}
        <section id="blog" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Blog & Preventive Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tip 1 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    What to Do After an Animal Bite
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Immediate steps to take if you've been bitten by an animal
                    to reduce infection risk.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Wash the wound thoroughly with soap and water</li>
                    <li>Apply antiseptic if available</li>
                    <li>Seek medical attention immediately</li>
                  </ul>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Preventing Animal Bites
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How to reduce your risk of being bitten by animals.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Never approach unfamiliar animals</li>
                    <li>
                      Avoid disturbing animals that are eating or sleeping
                    </li>
                    <li>Teach children how to interact safely with pets</li>
                    <li>Vaccinate your pets against rabies</li>
                  </ul>
                </div>
              </div>

              {/* Tip 3 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 bg-yellow-100 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Understanding Rabies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Key facts about rabies and why prompt treatment is
                    essential.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Rabies is almost always fatal once symptoms appear</li>
                    <li>The disease is preventable with prompt treatment</li>
                    <li>Symptoms may take weeks or months to appear</li>
                    <li>
                      All mammal bites should be evaluated for rabies risk
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        2nd Floor Colossal Bldg., Brgy. Bihis, Sta. Teresita,
                        Batangas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">0912 660 7330</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">madjo.orca@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456.7890123456!2d121.12345678901234!3d14.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA3JzI0LjQiTiAxMjHCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">ABC</span>
                  </div>
                  <span className="ml-2 font-bold text-lg">
                    Animal Bite Center
                  </span>
                </div>
                <p className="mt-2 text-gray-400 text-sm">
                  Your trusted partner in animal bite care
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400 transition">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Animal Bite Center. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
