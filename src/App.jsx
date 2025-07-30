import React, { useState, useEffect } from "react";

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

  const images = [
    "/img/banner-2.webp",
    "/img/banner-3.webp",
    "/img/banner-4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [deviceType, setDeviceType] = useState(getDeviceType());

  function getDeviceType() {
    return window.innerWidth <= 1024 ? "mobile-tablet" : "desktop";
  }

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = getDeviceType();

      if (deviceType === "desktop" && newDeviceType === "mobile-tablet") {
        window.location.reload();
        return;
      }

      if (deviceType === "mobile-tablet" && newDeviceType === "desktop") {
        window.location.reload();
        return;
      }

      setDeviceType(newDeviceType);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [deviceType]);

  useEffect(() => {
    if (deviceType === "desktop") {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, deviceType, images.length]);

  return (
    <>
      <div className="min-h-screen font-sans bg-white text-gray-800">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md ">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="#">
              <div className="flex items-center">
                <img
                  className="w-10"
                  src="./img/abtc-logo.webp"
                  alt="Animal Bite Center Logo"
                />
                <span className="ml-2 font-bold text-xl">
                  Animal Bite Center
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav>
              <ul className="hidden md:flex space-x-8 items-center">
                <li>
                  <a href="#home" className="hover:text-blue-600 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-600 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-blue-600 transition">
                    Blog & Tips
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-xl transition duration-300 shadow-md w-full md:w-fit"
                  >
                    Contact
                  </a>
                </li>
              </ul>
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
                <ul className="flex flex-col space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-blue-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-blue-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-blue-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="hover:text-blue-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog & Tips
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-blue-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </header>
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-[40rem] md:h-screen overflow-hidden flex items-center justify-start"
        >
          <div className="absolute inset-0 z-10">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover object-right lg:object-center transition-opacity duration-1000 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div
              className={`absolute inset-0 z-20 pointer-events-none ${
                deviceType === "desktop"
                  ? "bg-gradient-to-r  from-[#00137b] to-transparent"
                  : "bg-gradient-to-b from-black/70 to-black/90"
              }`}
            />
          </div>

          <div className="relative z-30 px-4 w-full">
            <div className="container mx-auto text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-2xl">
                Your Trusted <span className="text-blue-500">Animal Bite</span>{" "}
                Care Center
              </h2>
              <p className="text-xl mb-8 max-w-2xl text-white">
                Providing fast, reliable, and professional care for animal bites
                and rabies prevention.
              </p>
              <ul className="flex flex-col md:flex-row items-center gap-5">
                <li className="text-center w-full md:w-fit">
                  <a
                    href="#contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition duration-300 shadow-md w-full md:w-fit"
                  >
                    Book an Appointment
                  </a>
                </li>
                <li className="text-center w-full md:w-fit">
                  <a
                    href="#services"
                    className="inline-block bg-white hover:bg-gray-300 text-blue-600 font-medium py-3 px-8 rounded-xl transition duration-300 shadow-md w-full md:w-fit"
                  >
                    Our Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-16 bg-white ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600">
              Our Mission
            </h2>
            <div className="max-w-3xl mx-auto rounded-xl p-8 ">
              <p className="text-lg text-center">
                We are committed to protecting the community by providing expert
                care, vaccinations, and guidance for anyone exposed to animal
                bites. Our team of healthcare professionals is dedicated to
                ensuring your safety and peace of mind.
              </p>
            </div>
            {/* About Section Cards */}
            <div className="flex flex-wrap gap-10 items-center justify-items-center place-content-center mt-10">
              {/* About Card 1 */}
              <div className="text-center px-5 py-8 max-w-72 shadow-md hover:shadow-blue-400 rounded-xl">
                <div className="block max-w-fit mx-auto bg-blue-50 p-4 rounded-full ">
                  <img
                    className="w-7"
                    src="./img/shield.svg"
                    alt="Shield Icon"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Expert Protection
                  </h3>
                  <p>
                    Comprehensive rabies prevention and post-exposure
                    prophylaxis following international medical protocols.
                  </p>
                </div>
              </div>
              {/* About Card 2 */}
              <div className="text-center px-5 py-8 max-w-72 shadow-md hover:shadow-blue-400 rounded-xl">
                <div className="block max-w-fit mx-auto bg-green-50 p-4 rounded-full ">
                  <img className="w-7" src="./img/heart.svg" alt="Heart Icon" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Compassionate Care
                  </h3>
                  <p>
                    We understand the anxiety that comes with animal bites. Our
                    team provides reassuring, patient-centered care.
                  </p>
                </div>
              </div>
              {/* About Card 3 */}
              <div className="text-center px-5 py-8 max-w-72 shadow-md hover:shadow-blue-400 rounded-xl">
                <div className="block max-w-fit mx-auto bg-blue-50 p-4 rounded-full ">
                  <img className="w-7" src="./img/users.svg" alt="Users Icon" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Community Focus
                  </h3>
                  <p>
                    Dedicated to serving our community with accessible,
                    professional medical care when you need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600">
              Our Professional Services
            </h2>
            <div className="max-w-3xl mx-auto rounded-xl p-8 ">
              <p className="text-lg text-center">
                Comprehensive medical care for animal bite incidents, from
                immediate treatment to long-term prevention strategies.
              </p>
            </div>
            <div className="flex flex-wrap-reverse xl:flex-nowrap items-center justify-center gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-3xl  gap-6 ">
                {/* Service Card 1 */}
                <div className="bg-white h-fit rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-300">
                  <div className="bg-gray-100 size-12 rounded-full flex items-center justify-center mb-4">
                    <img
                      className="w-7"
                      src="./img/syringe.svg"
                      alt="Syringe Icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Rabies Vaccination
                  </h3>
                  <p className="text-gray-600">
                    Pre-exposure and post-exposure rabies vaccination following
                    WHO guidelines for optimal protection.
                  </p>
                </div>

                {/* Service Card 2 */}
                <div className="bg-white h-fit rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-300">
                  <div className="bg-gray-100 size-12 rounded-full flex items-center justify-center mb-4">
                    <img
                      className="w-7"
                      src="./img/stethoscope.svg"
                      alt="Stethoscope Icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Animal Bite Treatment
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive wound care, cleaning, and medical treatment
                    for all types of animal bite injuries.
                  </p>
                </div>

                {/* Service Card 3 */}
                <div className="bg-white h-fit rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-300">
                  <div className="bg-gray-100 size-12 rounded-full flex items-center justify-center mb-4">
                    <img
                      className="w-7"
                      src="./img/message-square.svg"
                      alt="Message square Icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-gray-600">
                    Professional medical consultation to assess risk levels and
                    determine appropriate treatment protocols.
                  </p>
                </div>

                {/* Service Card 4 */}
                <div className="bg-white h-fit rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-300">
                  <div className="bg-gray-100 size-12 rounded-full flex items-center justify-center mb-4">
                    <img
                      className="w-7"
                      src="./img/calendar.svg"
                      alt="Calendar Icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Follow-Up Care</h3>
                  <p className="text-gray-600">
                    Scheduled follow-up appointments to monitor healing progress
                    and ensure complete recovery.
                  </p>
                </div>
              </div>
              <div className="mx-auto block max-w-fit">
                <img
                  className="w-96  xl:w-full"
                  src="./img/doctor.webp"
                  alt="Doctor Image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Blog & Tips Section */}
        <section id="blog" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600">
              Prevention & Safety Tips
            </h2>
            <div className="max-w-3xl mx-auto rounded-xl p-8 ">
              <p className="text-lg text-center">
                Comprehensive medical care for animal bite incidents, from
                immediate treatment to long-term prevention strategies.
              </p>
            </div>
            {/*  Blog & Tips Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tip 1 */}
              <div className=" bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-blue-400 transition duration-300">
                <div className="h-fit ">
                  <img
                    className="w-full h-60 object-cover"
                    src="./img/first-aid.webp"
                    alt="First Aid Image"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <h4 className="text-blue-600 text-lg font-semibold">
                        Emergency Care
                      </h4>
                    </div>
                    <div className="text-red-600 font-medium bg-red-100 pb-[2px] px-3 border border-red-300 rounded-full">
                      <small>Emergency Care</small>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 ">
                    Essential First Aid for Animal Bites
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the crucial steps to take immediately after an animal
                    bite to prevent infection and promote healing.
                  </p>
                  <h5 className="text-md font-semibold mb-2">Key Points:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>
                      Clean the wound immediately with soap and warm water
                    </li>
                    <li>Apply pressure to control bleeding</li>
                    <li>Seek medical attention within 24 hours</li>
                    <li>Monitor for signs of infection</li>
                  </ul>
                </div>
              </div>
              {/* Tip 2 */}
              <div className=" bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-blue-400 transition duration-300">
                <div className="h-fit ">
                  <img
                    className="w-full h-60 object-cover"
                    src="./img/prevention.webp"
                    alt="Prevention Image"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                      <h4 className="text-blue-600 text-lg font-semibold">
                        Prevention
                      </h4>
                    </div>
                    <div className="text-green-600 font-medium bg-green-100 pb-[2px] px-3 border border-green-300 rounded-full">
                      <small>Prevention</small>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 ">
                    Preventing Animal Bites: Safety Guidelines
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Practical tips to avoid dangerous encounters with animals
                    and protect yourself and your family.
                  </p>
                  <h5 className="text-md font-semibold mb-2">Key Points:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Never approach unfamiliar animals</li>
                    <li>Teach children proper animal interaction</li>
                    <li>Avoid disturbing animals while eating or sleeping</li>
                    <li>Keep pets vaccinated and properly trained</li>
                  </ul>
                </div>
              </div>
              {/* Tip 3 */}
              <div className=" bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-blue-400 transition duration-300">
                <div className="h-fit ">
                  <img
                    className="w-full h-60 object-cover"
                    src="./img/recovery.webp"
                    alt="Recovery Image"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" size-5"
                      >
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                      <h4 className="text-blue-600 text-lg font-semibold">
                        Recovery
                      </h4>
                    </div>
                    <div className="text-gray-600 font-medium bg-gray-100 pb-[2px] px-3 border border-gray-300 rounded-full">
                      <small>Recovery</small>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 ">
                    Wound Care and Recovery Guidelines
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Proper wound care techniques to ensure optimal healing and
                    reduce complications.
                  </p>
                  <h5 className="text-md font-semibold mb-2">Key Points:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Keep wounds clean and dry</li>
                    <li>Change dressings regularly</li>
                    <li>Watch for signs of healing complications</li>
                    <li>Follow up with healthcare providers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">
              Contact Us
            </h2>
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

                  <div className="flex items-start">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/p/Bite-Care-Animal-Bite-Center-61565543106297/"
                      className="flex items-start"
                    >
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeWidth={2}
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Facebook</h4>
                        <p className="text-gray-600">
                          Animal Bite Center Faceboook Page
                        </p>
                      </div>
                    </a>
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
        <footer className="bg-gray-900 text-white px-6 py-10">
          <div className=" container  mx-auto px-4 ">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="xl:mr-72">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <img
                      className="w-10"
                      src="./img/abtc-logo.webp"
                      alt="Animal Bite Center Logo"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Animal Bite Center
                    </h3>
                    <p className="text-sm">Professional Care & Prevention</p>
                  </div>
                </div>
                <p className="mt-4 text-sm max-w-md">
                  Committed to protecting our community through expert medical
                  care, professional guidance, and comprehensive animal bite
                  treatment.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:align-center gap-8 md:gap:10 xl:gap-52">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="#home"
                        className="hover:text-blue-600 transition"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="hover:text-blue-600 transition"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="hover:text-blue-600 transition"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blog"
                        className="hover:text-blue-600 transition"
                      >
                        Blog & Tips
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="hover:text-blue-600 transition"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                  <p className="text-sm">
                    2nd Floor Colossal Bldg., Brgy. Bihis,
                    <br />
                    Sta. Teresita, Batangas
                  </p>
                  <p className="text-sm mt-2">Phone: 0912 660 7330</p>
                  <p className="text-sm">Email: madjo.orca@gmail.com</p>
                  <ul className="flex items-center gap-2 mt-5 ">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/p/Bite-Care-Animal-Bite-Center-61565543106297/"
                      >
                        <svg
                          className="size-7 md:size-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        <svg
                          className="size-7 md:size-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        <svg
                          className="size-7 md:size-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <div className="text-center text-sm text-gray-400">
            <p className="mt-1">
              © 2025 Animal Bite Center. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
