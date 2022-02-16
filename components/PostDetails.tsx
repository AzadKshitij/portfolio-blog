import moment from 'moment'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Prism from 'prismjs'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { EmbedProps } from '@graphcms/rich-text-types'
import { postComplete } from '../types'
import Link from 'next/link'

const renderers = {
  h1: ({ children: children }: { children: any }) => (
    <h1 className=" b-4 text-2xl font-semibold text-white">{children}</h1>
  ),
  h2: ({ children: children }: { children: any }) => (
    <h2 className="mb-4 text-xl font-semibold text-white">{children}</h2>
  ),
  h3: ({ children: children }: { children: any }) => (
    <h3 className=" b-4 text-lg font-semibold text-white">{children}</h3>
  ),
  h4: ({ children: children }: { children: any }) => (
    <h4 className=" b-4 text-base font-semibold text-white">{children}</h4>
  ),
  h5: ({ children: children }: { children: any }) => (
    <h5 className=" b-4 text-sm font-semibold text-white">{children}</h5>
  ),
  h6: ({ children: children }: { children: any }) => (
    <h6 className=" b-4 text-xs font-semibold text-white">{children}</h6>
  ),
  a: ({ children, openInNewTab, href, rel, ...rest }) => {
    if (href.match(/^https?:\/\/|^\/\//i)) {
      return (
        <a
          href={href}
          className=" mb-4 text-link"
          target={openInNewTab ? '_blank' : '_self'}
          rel={rel || 'noopener noreferrer'}
          {...rest}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href}>
        <a {...rest} className=" mb-4 text-link">
          {children}
        </a>
      </Link>
    )
  },
  ul: ({ children: children }: { children: any }) => (
    <ul className=" b-4 list-disc px-4 text-white">{children}</ul>
  ),
  ol: ({ children: children }: { children: any }) => (
    <ul className="mb-4 list-decimal px-4 text-white">{children}</ul>
  ),
  bold: ({ children: children }: { children: any }) => (
    <strong className=" text-white">{children}</strong>
  ),
  italic: ({ children: children }: { children: any }) => (
    <em className=" text-white">{children}</em>
  ),
  underline: ({ children: children }: { children: any }) => (
    <u className=" text-white">{children}</u>
  ),
  p: ({ children: children }: { children: any }) => (
    <p className=" b-4 text-base leading-loose text-white">{children}</p>
  ),
  blockquote: ({ children: children }: { children: any }) => (
    <blockquote className="mb-8 border-l-4 pl-5 text-white">
      {children}
    </blockquote>
  ),
  code: ({ children: children }: { children: any }) => (
    <code
      className={`language-none mb-4 rounded bg-code_block p-2 leading-loose`}
    >
      {children}
    </code>
  ),
  code_block: ({ children: children }: { children: any }) => (
    <pre
      className={`language-none  mb-4 rounded bg-code_block p-2 leading-loose`}
    >
      <code>{children}</code>
    </pre>
  ),
  embed: {
    CodeBlock: ({
      code,
      language,
    }: EmbedProps<{ code: string; language: string }>) => {
      return (
        <pre
          className={`language-${language}  mb-4 rounded bg-code_block p-2 leading-loose`}
        >
          {console.log('language code_block', language)}
          <code>{code}</code>
        </pre>
      )
    },
  },

  img: ({ src, altText, handle, height, width }) => (
    <div className="mb-4 flex w-full justify-center text-white">
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

  console.log('post.content.references.code.raw.children', post.content)

  return (
    <>
      <div className="mb-8 rounded-lg bg-primary pb-12 shadow-lg lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
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
              <p className="ml-2 inline align-middle text-lg font-medium text-gray-100">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-100">
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
          <h1 className="mb-8 text-3xl font-semibold text-white">
            {post.title}
          </h1>
          {/* {post.content.raw.children.map(
            (typeObj: { children: []; type }, index) => {
              const children = typeObj.children.map(
                (item: { text: string }, itemindex) =>
                  getContentFragment(itemindex, item.text, item)
              )

              return getContentFragment(index, children, typeObj, typeObj.type)
            }
          )} */}
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
