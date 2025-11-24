import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const basePath = process.env.NODE_ENV === "production" ? "/manual-hovet" : "";

export default withMDX({
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  distDir: "dist",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
