"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useRegisterUser() {
  return useMutation(api.register.registerUser);
}
