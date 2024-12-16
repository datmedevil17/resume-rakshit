import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
        <h2 className="text-6xl font-extrabold mb-4 text-left font-recoleta">
          Position Of Responsibility
        </h2>
        <br />
      <WobbleCard containerClassName="bg-blue-900 ">

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Web3 Wing - Axios, Technical Society of IIIT Lucknow
            </h3>
            <p className="sm:text-lg italic">Member</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              Oct 2024 - Current
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
        I successfully coordinated an engaging and well-attended introduction event for the Web3 Wing of Axios, which attracted over 200 participants. The event provided a platform for meaningful discussions on Web3 development, fostering a deeper understanding of the technology and its potential. Additionally, I facilitated conversations around the resources and opportunities available to members, creating a collaborative and inclusive environment that encouraged learning and innovation within the community.
        </p>
      </WobbleCard>
      <br /><br />
      <WobbleCard containerClassName="bg-blue-900 ">

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Zephyr, Dance Society of IIIT Lucknow
            </h3>
            <p className="sm:text-lg italic">Events Lead</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              Oct 2024 - Current
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
        Demonstrated strong leadership by guiding team members through choreography training, fostering collaboration, and ensuring seamless execution of performances. Collaborated with technical teams for stage design, lighting, and sound to enhance the overall audience experience. Introduced innovative themes and dance styles, which set the society’s performances apart and garnered accolades, including multiple competition wins and positive audience feedback. Through these efforts, contributed to the society’s reputation as a vibrant and dynamic cultural entity.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;
