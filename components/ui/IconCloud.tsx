import IconCloud from "./icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "c",
    "python",
    "tailwindcss",
    "mongodb",
    "mysql",
    "solidity", // Added skill
    "hardhat",  // Added skill
    "wagmi",    // Added skill
    "foundry",  // Added skill
    "rust",     // Added skill
    "move",     // Added skill
    "aptos",    // Added skill
    "framermotion", // Added skill
    "shadcn-ui" // Added skill
  ];


export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-8 min-w-64 sm:pb-0 pb-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
