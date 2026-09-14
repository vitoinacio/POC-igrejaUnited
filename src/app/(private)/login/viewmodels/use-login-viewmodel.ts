"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function useLoginViewModel() {
  const router = useRouter();
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }
  return { onSubmit };
}
