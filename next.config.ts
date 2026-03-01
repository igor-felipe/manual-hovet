import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

 // desativado para usar dominio personalizado projeto.sig-hovet.site
 // const basePath = process.env.NODE_ENV === "production" ? "/manual-hovet" : "";
const basePath = process.env.NODE_ENV === "production" ? "" : "";

export default withMDX({
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  distDir: "dist",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
