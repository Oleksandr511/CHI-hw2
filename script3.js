const root = {
  name: "name",

  type: "folder",

  children: [
    {
      name: "folder 1",

      type: "folder",

      children: [
        {
          name: "folder 2",

          type: "folder",

          children: [
            {
              name: "file 3",

              type: "file",

              size: 30,
            },
          ],
        },
      ],
    },

    {
      name: "file 1",

      type: "file",

      size: 10,
    },

    {
      name: "file 2",

      type: "file",

      size: 20,
    },
  ],
};

let files = [];
function getFiles(root) {
  for (let key in root) {
    if (typeof root[key] === "object") {
      getFiles(root[key]);
    } else {
      if (root[key] === "file") {
        files.push(root.name);
      }
    }
  }

  return files;
}

let result = getFiles(root);

console.log(result);
