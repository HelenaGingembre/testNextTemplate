"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { UrlObject } from "url";

const AppLink = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string | UrlObject;
  className?: string;
}) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default AppLink;
