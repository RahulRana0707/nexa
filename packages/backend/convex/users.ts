import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    console.log("User Identity:", identity);
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const id = await ctx.db.insert("users", { name: args.name });
    return id;
  },
});
