import { IconCloudDemo } from "./ui/IconCloud";
import TechStackButton from "./ui/techstack-button";

const Skills = () => {
  return (
    <div className="mx-8 overflow-hidden">
      <div className="max-w-5xl mx-auto my-2 px-0 sm:px-6 py-6 border-neutral-600 border-2 rounded-lg flex gap-0 sm:gap-4 items-center bg-foreground sm:flex-row flex-col">
        <div className="p-4 w-11/12">
          <div className="lg:text-4xl text-3xl font-extrabold mb-8 font-recoleta">
            Skills
          </div>
          <div className="flex gap-2 flex-wrap">
  <TechStackButton name="React" icon="bg-cyan-400" /> {/* React uses cyan */}
  <TechStackButton name="Solidity" icon="bg-gray-700" /> {/* Solidity uses dark gray */}
  <TechStackButton name="Hardhat" icon="bg-yellow-500" /> {/* Hardhat has yellow branding */}
  <TechStackButton name="Wagmi" icon="bg-blue-500" /> {/* Wagmi uses blue shades */}
  <TechStackButton name="Foundry" icon="bg-orange-600" /> {/* Foundry aligns with orange */}
  <TechStackButton name="Rust" icon="bg-orange-700" /> {/* Rust uses darker orange */}
  <TechStackButton name="Move" icon="bg-purple-500" /> {/* Aptos Move aligns with purple */}
  <TechStackButton name="Aptos" icon="bg-teal-600" /> {/* Aptos often uses teal */}
  <TechStackButton name="Next.js" icon="bg-black" /> {/* Next.js uses black */}
  <TechStackButton name="JavaScript" icon="bg-yellow-300" /> {/* JavaScript is yellow */}
  <TechStackButton name="Typescript" icon="bg-blue-400" /> {/* TypeScript is blue */}
  <TechStackButton name="Express.js" icon="bg-gray-800" /> {/* Express.js uses black/gray */}
  <TechStackButton name="Node.js" icon="bg-green-400" /> {/* Node.js uses green */}
  <TechStackButton name="Tailwind CSS" icon="bg-teal-400" /> {/* Tailwind CSS uses teal */}
  <TechStackButton name="PostgreSQL" icon="bg-blue-600" /> {/* PostgreSQL is blue */}
  <TechStackButton name="MongoDB" icon="bg-green-500" /> {/* MongoDB is green */}
  <TechStackButton name="C" icon="bg-blue-500" /> {/* C programming uses blue */}
  <TechStackButton name="C++" icon="bg-blue-700" /> {/* C++ uses a darker blue */}
  <TechStackButton name="Python" icon="bg-blue-300" /> {/* Python uses blue and yellow */}
  <TechStackButton name="Framer Motion" icon="bg-pink-400" /> {/* Framer Motion aligns with pink */}
  <TechStackButton name="shadcn/ui" icon="bg-gray-400" /> {/* Neutral gray for shadcn/ui */}
  <TechStackButton name="Git" icon="bg-red-500" /> {/* Git is red */}
  <TechStackButton name="Docker" icon="bg-blue-500" /> {/* Docker uses blue */}
</div>

        </div>

        <div>
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;
