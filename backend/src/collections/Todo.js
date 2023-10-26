/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: "todo",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
  ],
};

export default Todo;
