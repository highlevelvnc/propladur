import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.fullName,
    short_name: COMPANY.name,
    description:
      "Especialistas em pladur, acabamentos e remodelações no Porto.",
    start_url: "/",
    display: "standalone",
    background_color: "#170F09",
    theme_color: "#170F09",
    orientation: "portrait",
    lang: "pt-PT",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
