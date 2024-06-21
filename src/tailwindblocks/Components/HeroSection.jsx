import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to <span className="">QuickStart</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Quickly start your project now and set the stage for success
            </p>
            <div
              class="d-flex aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="#about"
                className=" bg-cyan-500 text-white border-0 py-1 px-3 rounded-md hover:bg-cyan-600"
              >
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                class="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span className="ml-3 text-cyan-600">Watch Video</span>
              </a>
            </div>

            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded "
              alt="hero"
              src="src/assets/hero-services-img.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
