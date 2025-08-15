import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addSkill = mutation({
  args: {
    name: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("skills", {
      name: args.name,
      category: args.category,
    });
  },
});

export const seedSkills = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if skills already exist
    const existingSkills = await ctx.db.query("skills").collect();
    if (existingSkills.length > 0) {
      return "Skills already exist";
    }

    const skillsData = [
      // Programming Languages
      { name: "Python", category: "Programming Languages" },
      { name: "JavaScript", category: "Programming Languages" },
      { name: "Solidity", category: "Programming Languages" },
      { name: "SQL", category: "Programming Languages" },
      { name: "HTML5", category: "Programming Languages" },
      { name: "CSS3", category: "Programming Languages" },
      
      // Frameworks & Libraries
      { name: "React", category: "Frameworks & Libraries" },
      { name: "Flask", category: "Frameworks & Libraries" },
      { name: "FastAPI", category: "Frameworks & Libraries" },
      { name: "OpenCV", category: "Frameworks & Libraries" },
      { name: "Tailwind CSS", category: "Frameworks & Libraries" },
      { name: "Bootstrap", category: "Frameworks & Libraries" },
      { name: "Web3.js", category: "Frameworks & Libraries" },
      
      // Blockchain Technologies
      { name: "Ethereum", category: "Blockchain Technologies" },
      { name: "Smart Contracts", category: "Blockchain Technologies" },
      { name: "MetaMask", category: "Blockchain Technologies" },
      { name: "IPFS", category: "Blockchain Technologies" },
      { name: "Truffle", category: "Blockchain Technologies" },
      
      // AI & Machine Learning
      { name: "Machine Learning", category: "AI & Machine Learning" },
      { name: "NLP", category: "AI & Machine Learning" },
      { name: "spaCy", category: "AI & Machine Learning" },
      { name: "Transformers", category: "AI & Machine Learning" },
      { name: "MediaPipe", category: "AI & Machine Learning" },
      { name: "Computer Vision", category: "AI & Machine Learning" },
      
      // Tools & Platforms
      { name: "Git", category: "Tools & Platforms" },
      { name: "GitHub", category: "Tools & Platforms" },
      { name: "Postman", category: "Tools & Platforms" },
      { name: "Docker", category: "Tools & Platforms" },
      { name: "Ganache", category: "Tools & Platforms" },
    ];

    for (const skill of skillsData) {
      await ctx.db.insert("skills", skill);
    }

    return `Added ${skillsData.length} skills`;
  },
});
