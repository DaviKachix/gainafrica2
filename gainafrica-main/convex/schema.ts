import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  events: defineTable({
    year: v.number(),
    theme: v.string(),
    description: v.string(),
    location: v.string(),
    country: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    heroImage: v.optional(v.string()),
    isActive: v.boolean(),
    registrationOpen: v.boolean(),
  }).index("by_year", ["year"]),

  presenters: defineTable({
    eventId: v.id("events"),
    name: v.string(),
    title: v.string(),
    organization: v.string(),
    bio: v.string(),
    photo: v.optional(v.string()),
    country: v.string(),
  }).index("by_event", ["eventId"]),

  presentations: defineTable({
    eventId: v.id("events"),
    presenterId: v.id("presenters"),
    title: v.string(),
    description: v.string(),
    videoUrl: v.optional(v.string()),
    slidesUrl: v.optional(v.string()),
    duration: v.optional(v.string()),
  }).index("by_event", ["eventId"]),

  resources: defineTable({
    eventId: v.id("events"),
    title: v.string(),
    description: v.string(),
    fileUrl: v.string(),
    fileType: v.string(),
    fileSize: v.optional(v.string()),
    category: v.string(),
  }).index("by_event", ["eventId"]),


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
