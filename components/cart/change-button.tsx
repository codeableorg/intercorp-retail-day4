"use client";

import { Button } from "../ui";
import { changeItemQuantity } from "@/lib/actions";
import { CartItem } from "@/lib/types";
import { useFormStatus } from "react-dom";

export function ChangeButton({
  id,
  quantity,
  children,
}: {
  id: CartItem["id"];
  quantity: number;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="outline"
      size="sm-icon"
      formAction={() => changeItemQuantity(id, quantity)}
      disabled={pending}
    >
      {children}
    </Button>
  );
}
