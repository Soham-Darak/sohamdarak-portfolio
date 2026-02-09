"use client";

import React from "react";
import Galaxy from "../Galaxy";

export default function GlobalGalaxy() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Galaxy />
    </div>
  );
}
