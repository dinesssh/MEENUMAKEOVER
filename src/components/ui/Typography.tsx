/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { cn } from "@/lib/utils";
import { TYPE_TOKENS, TypographyToken } from "@/lib/typography";

interface TypographyProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
  variant?: TypographyToken;
}

function createTypographyComponent<DefaultTag extends React.ElementType>(
  defaultTag: DefaultTag,
  defaultVariant: TypographyToken
) {
  return function TypographyComponent<T extends React.ElementType = DefaultTag>({
    as,
    className,
    children,
    variant = defaultVariant,
    ...props
  }: TypographyProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
    const Component = as || defaultTag;
    
    return (
      <Component className={cn(TYPE_TOKENS[variant], className)} {...(props as any)}>
        {children}
      </Component>
    );
  };
}

export const Display = createTypographyComponent("h1", "displayXl");
export const H1 = createTypographyComponent("h1", "headingXl");
export const H2 = createTypographyComponent("h2", "headingXl");
export const H3 = createTypographyComponent("h3", "headingLg");
export const H4 = createTypographyComponent("h4", "headingMd");
export const Eyebrow = createTypographyComponent("p", "eyebrow");
export const Body = createTypographyComponent("p", "body");
export const BodyLg = createTypographyComponent("p", "bodyLg");
export const BodySm = createTypographyComponent("p", "bodySm");
export const Caption = createTypographyComponent("p", "caption");
export const Price = createTypographyComponent("p", "price");

export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return <em className={cn(TYPE_TOKENS.italicEmphasis, className)}>{children}</em>;
}
