import type { MetadataRoute } from "next";
import { PERSON_NAME, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: PERSON_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f9fbf7",
    theme_color: "#52c48a",
    lang: "en",
  };
}
