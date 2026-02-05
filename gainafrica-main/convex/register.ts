import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const registerUser = mutation({
  args: {
    email: v.string(),
    firstName: v.string(),
    middleName: v.optional(v.string()),
    lastName: v.string(),
    gender: v.string(),
    nationality: v.string(),
    africanCountry: v.optional(v.string()),
    nonAfricanCountry: v.optional(v.string()),
    profession: v.string(),
    organization: v.string(),
    phone: v.string(),
    foodPreference: v.string(),
    ageGroup: v.string(),
    otherInfo: v.optional(v.string()),
  },

  handler: async ({ db }, args) => {
    // Prevent duplicate registration by email
    const existing = await db
      .query("registrations")
      .withIndex("by_email", q => q.eq("email", args.email))
      .unique();

    if (existing) {
      throw new Error("This email is already registered.");
    }

    const id = await db.insert("registrations", {
      email: args.email,
      firstName: args.firstName,
      middleName: args.middleName,
      lastName: args.lastName,
      gender: args.gender,
      nationality: args.nationality,
      africanCountry: args.africanCountry,
      nonAfricanCountry: args.nonAfricanCountry,
      profession: args.profession,
      organization: args.organization,
      phone: args.phone,
      foodPreference: args.foodPreference,
      ageGroup: args.ageGroup,
      otherInfo: args.otherInfo,
      createdAt: Date.now(), // ✅ serializable
    });

    return {
      success: true,
      id,
    };
  },
});
