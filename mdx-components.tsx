/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import DriveVideo from "./components/DriveVideo";

export function useMDXComponents(
  components: Record<string, { src: string }> = {}
) {
 // desativado para usar dominio personalizado projeto.sig-hovet.site
 // const basePath = process.env.NODE_ENV === "production" ? "/manual-hovet" : "";
  const basePath = process.env.NODE_ENV === "production" ? "" : "";

  const img = (props: { src: string }) => {
    const src = props?.src || "";
    const fixedSrc = src.startsWith("/") ? `${basePath}${src}` : src;
    return <img {...props} src={fixedSrc} />;
  };

  return {
    DriveVideo,
    ...components,
    img,
    Image: img,
  };
}
