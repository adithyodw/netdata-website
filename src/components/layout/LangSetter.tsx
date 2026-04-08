"use client";

import { useEffect } from "react";

export function LangSetter({ locale }: { locale: "id" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
