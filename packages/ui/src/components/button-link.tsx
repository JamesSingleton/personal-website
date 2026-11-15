"use client";

import { Button as ButtonPrimitive } from "@ui-sdk/react/button";
import { cn } from "@workspace/tailwind-config/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

import { buttonVariants } from "@workspace/ui/components/button";

// The <a> is created here, on the client: a `render` element built in a Server
// Component fails to render inside ui-sdk's Button during prerendering.
type ButtonLinkProps = Omit<ComponentProps<"a">, "children"> &
  VariantProps<typeof buttonVariants> & {
    disabled?: boolean;
    children: ReactNode;
  };

function ButtonLink({
  className,
  variant,
  size,
  disabled,
  children,
  ...anchorProps
}: ButtonLinkProps) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size }), className)}
      data-variant={variant ?? "default"}
      disabled={disabled}
      render={<a {...anchorProps} />}
    >
      {children}
    </ButtonPrimitive>
  );
}

export { ButtonLink };
