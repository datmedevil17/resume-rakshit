import Link from "next/link";
import { FaLink, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-foreground">
      <div className="px-8 md:px-20 sm:px-10 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-start mb-2.5 font-bold">
          <FaLink className="size-5" />
          <div className="text-xl xl:text-2xl"> Connect with me</div>
        </div>
        <div className="flex items-center sm:gap-2 justify-center text-lg text-neutral-400 font-medium flex-col sm:flex-row">
          <div className="flex-1 w-full">
            <Link
              className="flex items-center gap-2 justify-start mb-2  hover:text-white hover:underline"
              href="https://github.com/datmedevil17"
              target="_blank"
            >
              <LuGithub className="size-5" />
              <div> rakshitShukla</div>
            </Link>

            <Link
              className="flex items-center gap-2 justify-start mb-2 hover:text-white hover:underline"
              href="https://x.com/Rakshxt01__"
              target="_blank"
            >
              <FaXTwitter className="size-5" />
              <div> @Rakshxt01__</div>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <Link
              className="flex items-center gap-2 justify-start mb-2  hover:text-white hover:underline flex-wrap"
              href="mailto:rakshitshukla17@gmail.com"
              target="_blank"
            >
              <MdOutlineEmail className="size-5" />
              <div className="break-all"> rakshitshukla17@gmail.com</div>
            </Link>

            <Link
              className="flex items-center gap-2 justify-start mb-2  hover:text-white hover:underline"
              href="https://www.linkedin.com/in/rakshit-shukla/"
              target="_blank"
            >
              <FaLinkedinIn className="size-5" />
              <div>Rakshit Shukla</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
