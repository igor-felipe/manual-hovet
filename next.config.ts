import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  output: "export",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
