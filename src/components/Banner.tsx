import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: 'url(https://ik.imagekit.io/8jn9lgbbcw/web/ChatGPT%20Image%20Jul%206,%202026,%2012_10_36%20PM.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
    </section>
  );
};

export default Banner;