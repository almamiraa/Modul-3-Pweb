import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "nama",
      type: "text",
      required: true,
    },
  ],
};

export default Categories;
