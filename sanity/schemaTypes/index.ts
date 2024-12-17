import { type SchemaTypeDefinition } from "sanity";
import { post } from "../schemas/post";
import { caseStudy } from "../schemas/casestudy";
import { event } from "../schemas/event";
import { award } from "../schemas/award";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, caseStudy, event, award],
};
