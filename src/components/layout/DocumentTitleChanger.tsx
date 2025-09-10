"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DocumentTitleChanger() {
  useDocumentTitle({
    defaultTitle: "Zishes",
    onBlurTitle: "Zishes",
  });

  // This component doesn't render anything
  return null;
}
