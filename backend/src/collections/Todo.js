import payload from "payload";
/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: "todo",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "todo",
                            action : "create",
                            timestamp: new Date()
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "todo",
                            action : "update",
                            timestamp: new Date()
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "todo",
                            action : "delete",
                            timestamp: new Date()
                        },
                    });
                } 
            },
        ],
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
