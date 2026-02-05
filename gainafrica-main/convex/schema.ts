import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  registrations: defineTable({
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
    createdAt: v.number(),
  
  })
  
  .index("by_email", ["email"]),
});
