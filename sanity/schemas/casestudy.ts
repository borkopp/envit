import { Rule } from "sanity";

export const caseStudy = {
  name: "caseStudy",
  title: "Case Studies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Title is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Maximum 200 characters"),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "primaryLink",
      title: "Primary Link",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "URL", value: "url" },
              { title: "PDF", value: "pdf" },
            ],
          },
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          hidden: ({ parent }: { parent: { type?: string } }) =>
            parent?.type !== "url",
        },
        {
          name: "file",
          title: "PDF File",
          type: "file",
          hidden: ({ parent }: { parent: { type?: string } }) =>
            parent?.type !== "pdf",
        },
      ],
    },
    {
      name: "secondaryLink",
      title: "Secondary Link (Optional)",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "URL", value: "url" },
              { title: "PDF", value: "pdf" },
            ],
          },
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          hidden: ({ parent }: { parent: { type?: string } }) =>
            parent?.type !== "url",
        },
        {
          name: "file",
          title: "PDF File",
          type: "file",
          hidden: ({ parent }: { parent: { type?: string } }) =>
            parent?.type !== "pdf",
        },
      ],
    },
  ],
};
