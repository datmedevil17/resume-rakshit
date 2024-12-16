import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Regal from "@/public/images/gallery.png";
import Bytes from "@/public/images/Dao.png";
import Page from "@/public/images/metamart.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://hack-web3conf-bvdj.vercel.app/"} target="_blank">
              <Image
                src={Bytes}
                alt="Regal Estate"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Study DAO</div>
            <Link
              href={"https://github.com/datmedevil17/hack-web3conf"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            The StudyDAO and KnowledgeVault system creates a decentralized platform where students, teachers, and contributors collaborate to enhance education and knowledge-sharing. By leveraging blockchain technology, this platform ensures transparency, fair rewards, and community-driven governance.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Solidity
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Javascript
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Hardhat
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              IPFS
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://landing-page-rho-hazel.vercel.app/"}
              target="_blank"
            >
              <Image
                src={Regal}
                alt="Page"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">
              {" "}
              Meta-Gallery
            </div>
            <Link
              href={"https://github.com/datmedevil17/reclaim-project"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            Meta Gallery is a metaverse-based platform where artists can register, showcase their NFT paintings in a virtual art gallery, and engage with a global audience. Users can browse, buy, sell, and auction artwork while customizing their avatars for a personalized experience.

With real-time socket technology, the platform enables interactive multiplayer features like live chat, fostering a social and dynamic environment. **Meta Gallery** seamlessly blends blockchain, art, and the metaverse, redefining how digital art is curated and traded.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React-Three
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Javascript
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Solidity
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Hardhat
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Web Sockets
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://bytes-kohl.vercel.app/"} target="_blank">
              <Image
                src={Page}
                alt="Bytes"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Metamart</div>
            <Link
              href={"https://github.com/akshat-bhansali/metamart"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            MetaMart is transforming shopping with cutting-edge technology, combining Augmented Reality (AR) and Artificial Intelligence (AI) for an immersive experience. Explore 3D product views, receive personalized recommendations, and enjoy cross-platform access on desktops, mobiles, and VR. With features like gamified interactions, customizable environments, free-roam functionality, and inclusivity for colorblind users, MetaMart ensures a seamless and intuitive shopping journey. Experience no waiting times, easy checkouts, and join us in shaping the future of e-commerce by exploring our source code.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              MongoDB
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Gemini
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React-Three
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Javascript
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
             AR/VR
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Vercel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
