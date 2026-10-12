import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahmed Sherif – Graphic Designer & Art Director", short_name: "Ahmed Sherif", start_url: "/",
    display: "standalone", background_color: "#15120e", theme_color: "#15120e",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
