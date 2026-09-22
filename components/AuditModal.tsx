
"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import InteractiveIntakeForm from "./InteractiveIntakeForm";

export default function AuditModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const showModal = searchParams.get("audit") === "true";
  const selectedService = searchParams.get("service") || "";
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (showModal && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [showModal]);

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("audit");
    params.delete("service");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!showModal) return null;

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-zinc-950/80 fixed inset-0 z-[100] m-auto max-w-2xl w-full bg-transparent p-4 outline-none"
      onClose={closeModal}
      onClick={(e) => {
        if (e.target === dialogRef.current) closeModal();
      }}
    >
      <div className="relative w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-full bg-zinc-100 dark:bg-zinc-800"
        >
          ✕
        </button>
        <InteractiveIntakeForm initialService={selectedService} />
      </div>
    </dialog>
  );
}

