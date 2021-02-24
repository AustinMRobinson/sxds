// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// //Finding directory named "foundation" from the current working directory of Node.
// const foundationDirectory = path.join(process.cwd(), "foundation");

// export const getSortedPages = () => {
//   //Reads all the files in the post directory
//   const fileNames = fs.readdirSync(foundationDirectory);

//   const allPageData = fileNames.map((filename) => {
//     const slug = filename.replace(".mdx", "");

//     const fullPath = path.join(foundationDirectory, filename);
//     //Extracts contents of the MDX file
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const { data } = matter(fileContents);

//     const options = { month: "long", day: "numeric", year: "numeric" };
//     const formattedDate = new Date(data.date).toLocaleDateString(
//       "en-IN",
//       options
//     );

//     const frontmatter = {
//       ...data,
//       date: formattedDate,
//     };
//     return {
//       slug,
//       ...frontmatter,
//     };
//   });

//   return allPageData.sort((a, b) => {
//     if (new Date(a.date) < new Date(b.date)) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// };

// //Get Slugs
// export const getAllPageSlugs = () => {
//   const fileNames = fs.readdirSync(foundationDirectory);

//   return fileNames.map((filename) => {
//     return {
//       params: {
//         slug: filename.replace(".mdx", "")
//       }
//     };
//   });
// };

// //Get Page based on Slug
// export const getPagedata = async (slug) => {
//   const fullPath = path.join(foundationDirectory, `${slug}.mdx`);
//   const pageContent = fs.readFileSync(fullPath, "utf8");

//   return pageContent;
// };