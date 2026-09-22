
"use client";

import React, { Suspense } from "react";
import AuditModal from "./AuditModal";

export default function AuditModalWrapper() {
  return (
    <Suspense fallback={null}>
      <AuditModal />
    </Suspense>
  );
}

