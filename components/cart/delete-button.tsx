"use client";

import { Trash2 } from "lucide-react";
import { Button } from "../ui";
import { removeItem } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="sm-icon"
      variant="outline"
      formAction={removeItem}
      disabled={pending}
    >
      <Trash2 />
    </Button>
  );
}
