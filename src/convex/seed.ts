"use node";

import { internal } from "./_generated/api";
import { internalAction } from "./_generated/server";

// A helper to construct the URL for a skill logo from simpleicons.org
function getSimpleIconsUrl(name: string) {
  // Simple Icons slugs are lowercase, with spaces and special chars removed.
  // This is a simplified slug generator.
  const slug = name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "dot")
    .replace(/&/g, "and")
    .replace(/ /g, "")
    .replace(/#/g, "sharp");
  return `https://cdn.simpleicons.org/${slug}/white`; // Requesting white icon for dark theme
}

export const addSkillLogos = internalAction({
  args: {},
  handler: async (ctx) => {
    const skills = await ctx.runQuery(internal.skills.internalList);

    for (const skill of skills) {
      // Skip if logo already exists
      if (skill.logoUrl) continue;

      const logoUrl = getSimpleIconsUrl(skill.name);

      try {
        const response = await fetch(logoUrl);
        // Check if the image was found and is an SVG
        if (response.ok && response.headers.get("content-type")?.includes("svg")) {
          await ctx.runMutation(internal.skills.updateLogo, {
            id: skill._id,
            logoUrl: logoUrl,
          });
          console.log(`Logo added for ${skill.name}`);
        } else {
          console.warn(`Logo not found for ${skill.name} at ${logoUrl}`);
        }
      } catch (e) {
        console.error(`Error fetching logo for ${skill.name}`, e);
      }
    }
    return "Skill logo update process finished.";
  },
});
