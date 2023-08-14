import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl px-6 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl  px-6">
        "Hello! I'm a third-year Computer Science student at College of Engineering Trivandrum. My passion lies in the world of web development and product management. I enjoy crafting user-friendly and visually appealing websites that make a positive impact.One aspect of my journey that I truly cherish is the opportunity to meet new people. Collaboration and teamwork have played a vital role in my growth as a developer. I even did an internship at TinkerHub Foundation. There I got a chance to connect with like-minded individuals, exchange ideas, and work together to bring ideas to life. 
</p>

        <br />

        <p className="text-xl px-6 py-6">
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore. */}
        The thing that I love about being a web developer, and a developer in general, is and always has been the sole fact that it lets me create new things out of nothing.

You can come up with an idea and just bring it to life only using your fingers and a keyboard, and you don’t need to be a genius, nor an artist, nor an artisan."
        </p>
      </div>
    </div>
  );
};

export default About;
