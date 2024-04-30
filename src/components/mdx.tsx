import Link from "next/link";
import Image from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import { JSX, ReactElement } from "react";
import { highlight } from "sugar-high";

export const customComponents: MDXComponents = {
  hr: ({ children }) => (
    <hr className="border-slate-700 border-spacing-4 border my-3">
      {children}
    </hr>
  ),

  p: ({ children }) => (
    <p className="text-slate-400 font-source text-lg">{children}</p>
  ),

  h1: ({ children }) => (
    <h1 className="text-slate-200 font-bold font-source text-3xl my-4">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-slate-300 font-semibold font-source text-2xl my-3">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-slate-300 font-source text-xl my-2">{children}</h3>
  ),

  h4: ({ children }) => (
    <h4 className="text-slate-300 font-source text-lg my-1">{children}</h4>
  ),

  h5: ({ children }) => (
    <h5 className="text-slate-300 font-source text-base">{children}</h5>
  ),

  a: ({ children, href }) => (
    <Link href={href ?? "#"} className="text-[#9e98f2] underline">
      {children}
    </Link>
  ),

  blockquote: ({ children }) => (
    <blockquote className="bg-transparent opacity-80 border-l-4 border-[#34495e] pl-4 my-4">
      {children}
    </blockquote>
  ),

  div: ({ children }) => (
    <div className="highlight rounded-lg bg-[#13191d] p-1 font-source my-4">
      {children}
    </div>
  ),

  pre: ({ children }) => (
    <pre className="bg-[#21262d] rounded p-1 overflow-x-auto">{children}</pre>
  ),

  code: ({ children, ...props }) => (
    <Code
      className="font-source rounded-lg px-2 py-1 highlight"
      {...props}
    >
      {children}
    </Code>
  ),

  // eslint-disable-next-line @next/next/no-img-element
  img: ({ children, alt }) => (
    <img
      alt={alt ?? "some post image"}
      className="rounded-lg my-4 block m-auto"
    >
      {children}
    </img>
  ),

  ul: ({ children }) => <ul className="list-disc pl-8">{children}</ul>,

  li: ({ children }) => (
    <li className="text-slate-400 font-source text-lg">{children}</li>
  ),

  ol: ({ children }) => <ol className="list-decimal pl-8">{children}</ol>,
};

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props}></code>;
}

export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...customComponents, ...(props.components || {}) }}
    />
  );
}
