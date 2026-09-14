"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useLoginViewModel() {
  const router = useRouter();

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  }, [router]);

  return { onSubmit };
}