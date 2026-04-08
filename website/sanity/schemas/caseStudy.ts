import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "challenge", type: "text" }),
    defineField({ name: "solution", type: "text" }),
    defineField({ name: "impactMetrics", type: "text" }),
  ],
});
