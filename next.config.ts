import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/manual-hovet" : "",
  distDir: "dist",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
