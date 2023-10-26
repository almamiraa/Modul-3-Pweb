import { CollectionConfig } from "payload/types";
import Categories from "./Categories";

const Todos: CollectionConfig = {
  slug: "todos",
  fields: [
    {
      name: "Task",
      type: "text",
      required: true,
    },
    {
      name: "Kategori",
      type: "relationship",
      required: true,
      relationTo: "categories",
      filterOptions: ({ relationTo, siblingData }) => {
        if (relationTo === "categories") {
          return {
            nama: { equals: siblingData.nama }, // Assuming 'name' is the field name in the Category collection
          };
        }
        return {};
      },
    },
  ],
};

export default Todos;
