"use client";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useEffect } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll;
    // // Attach event listener
    // document.addEventListener("click", () => {
    //   handleScroll(onclick);
    //   console.log(" clicked!");
    // });

    // // Cleanup
    // return () => {
    //   // Remove event listener on component unmount
    //   document.removeEventListener("click", () => {
    //     console.log("Clean clicked!");
    //   });
    // };
  }, [handleScroll]);

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
