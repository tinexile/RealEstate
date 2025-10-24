import React from "react";
import HeroBuilding from '../Components/media/hero.png'
const Section = () => {
  return (
    <>
      <main>
        <section  className="black-grad bg-[#2B2B2B] text-white">
           {/* Hero Text Section */}
          <div className="flex flex-col py-20 px-5 gap-2 ">
            <h1 className="font-medium text-xl ">
              We Provide <br /> Architectural design <br /> and Construction{" "}
            </h1>
            <p className="text-[#c4c4c4] text-base">
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different
            </p>
            <button
            //   style={{
            //     background:
            //       "linear-gradient(97.65deg, #60bbee 0.33%, #0a72ad 93.35%)",
            //   }}
              className="self-start blue-grad text-base px-3 py-1.5 mt-2 "
            >
              Discover More
            </button>
          </div>
          {/* Hero Image  */}

          <div className="flex justify-end -mt-32">
            <img src={HeroBuilding} alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Section;
