import { query, internalQuery, internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  },
});

export const internalList = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  },
});

export const updateLogo = internalMutation({
  args: {
    id: v.id("skills"),
    logoUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { logoUrl: args.logoUrl });
  },
});