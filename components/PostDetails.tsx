// @ts-nocheck
import moment from 'moment'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Prism from 'prismjs'
import { RichText } from '@graphcms/rich-text-react-renderer'
import {
  EmbedProps,
  Reference,
  EmbedReferences,
} from '@graphcms/rich-text-types'
import { postComplete } from '../types'
import Link, { LinkProps } from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type a = {
  href: LinkProps['href'] | any
  className?: string
  children: any
  rel?: string
  id?: string
  title?: string
  openInNewTab?: boolean
}

type img = {
  src: string
  altText?: string
  handle?: any
  height?: number
  width?: number
}

type code = {
  language: any
  code: any
}

const renderers = {
  h1: ({ children: children }: { children: any }) => (
    <h1 className="mt-6 text-3xl font-bold text-black">{children}</h1>
  ),
  h2: ({ children: children }: { children: any }) => (
    <h2 className="mt-6 text-2xl font-bold text-black">{children}</h2>
  ),
  h3: ({ children: children }: { children: any }) => (
    <h3 className="mt-6 text-xl font-bold text-black">{children}</h3>
  ),
  h4: ({ children: children }: { children: any }) => (
    <h4 className="mt-6 text-base font-bold text-black">{children}</h4>
  ),
  h5: ({ children: children }: { children: any }) => (
    <h5 className="mt-6 text-sm font-bold text-black">{children}</h5>
  ),
  h6: ({ children: children }: { children: any }) => (
    <h6 className="mt-6 text-xs font-bold text-black">{children}</h6>
  ),
  a: ({ children, openInNewTab, href, rel }: a) => {
    if (href.match(/^https?:\/\/|^\/\//i)) {
      return (
        <a
          href={href}
          className=" mb-4 text-link transition duration-200 ease-in hover:text-title"
          target={openInNewTab ? '_blank' : '_self'}
          rel={'noopener noreferrer'}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href}>
        <a
          rel={rel || 'noopener noreferrer'}
          className=" mb-4 text-link transition duration-200 ease-in hover:text-title"
        >
          {children}
        </a>
      </Link>
    )
  },
  ul: ({ children: children }: { children: any }) => (
    <ul className="mt-2 list-disc px-4 text-lg text-black">{children}</ul>
  ),
  ol: ({ children: children }: { children: any }) => (
    <ul className="mb-2 mt-4 list-decimal px-4 text-lg text-black">
      {children}
    </ul>
  ),
  bold: ({ children: children }: { children: any }) => (
    <strong className=" text-black">{children}</strong>
  ),
  italic: ({ children: children }: { children: any }) => (
    <em className=" text-black">{children}</em>
  ),
  underline: ({ children: children }: { children: any }) => (
    <u className=" text-black">{children}</u>
  ),
  p: ({ children: children }: { children: any }) => (
    <p className="b-4 mt-4 text-lg  leading-normal  text-black md:text-xl">
      {children}
    </p>
  ),
  blockquote: ({ children: children }: { children: any }) => (
    <blockquote className="mb-8 mt-2 border-l-4 pl-5 text-lg text-black">
      {children}
    </blockquote>
  ),
  code: ({ children: children }: { children: any }) => (
    <code className="language-none mb-4 rounded bg-code_block p-2 leading-loose">
      {children}
    </code>
  ),
  code_block: ({ children: children }: { children: any }) => (
    <pre className="language-none mb-4 rounded bg-code_block p-2 leading-loose">
      <code>{children}</code>
    </pre>
  ),
  embed: {
    CodeBlock: ({ code, language }: EmbedProps<code>) => {
      let [copied, setCopied] = React.useState(false)

      function copy() {
        // console.log('copied')
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      }
      return (
        <>
          <div className="flex justify-end">
            {/* mt-4 flex items-end justify-end rounded-lg bg-link px-2 py-1 */}
            {/* text-white hover:bg-title md:px-4 md:py-1 */}
            <CopyToClipboard
              text={code}
              onCopy={() => copy()}
              className=" mt-4 cursor-pointer items-end rounded-lg bg-link px-2 py-1 text-center text-white duration-300 hover:bg-title md:px-4 md:py-1"
            >
              <button className=" text-base ">
                {copied ? 'Copied' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>
          <pre
            className={`language-${language} rounded bg-code_block leading-loose`}
          >
            <code>{code}</code>
          </pre>
        </>
      )
    },
  },

  img: ({ src, altText, handle, height, width }: img) => (
    <div className="mb-4 mt-2 flex w-full justify-center text-white">
      <Image
        src={src}
        alt={altText}
        height={height}
        width={width}
        objectFit="cover"
        key={handle}
      />
    </div>
  ),
}

function PostDetails({ post: post }: { post: postComplete }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <div className="mb-8 rounded-lg border-2 bg-primary pb-12 shadow-lg lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-full max-h-[340px] w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="mb-8 flex w-full items-center">
            <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
              <Image
                alt={post.author.name}
                height={30}
                width={30}
                className="rounded-full align-middle"
                src={post.author.image.url}
              />
              <p className="ml-2 inline align-middle text-lg font-medium text-gray-800">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold text-mainTitle">
            {post.title}
          </h1>
          <div className=" ">
            <RichText
              content={post.content.raw.children}
              renderers={renderers}
              references={post.content.references}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetails
