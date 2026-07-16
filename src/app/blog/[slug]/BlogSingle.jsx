'use client'

import Image from "next/image"
import Link from "next/link"
import { useBlog } from "@/contextapi/BlogContext";
import "@/app/globals.css";
import Breadcrumb from "@/components/Breadcrumb";
export default function BlogDetails({ post }) {

  const single = post?.blog;
  const { blogs: recentBlogs } = useBlog();

  return (
    <div className="max-w-6xl mx-auto gap-10 px-4 
    bg-[#0f0a1f] text-white py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
      {/* LEFT SIDE */}
      <article className="lg:col-span-2 space-y-10">

            {/* TITLE + DATE */}
            <div className="mt-6 px-2 md:px-0">

              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                {single?.Title}
              </h1>

              <p className="text-sm text-white mt-2">
                {new Date(single?.Date).toDateString()}
              </p>

            </div>
        {/* HERO */}
        <div className="w-full flex justify-center pt-2">
          <div className="w-full">

            {/* IMAGE */}
            <div className="w-full h-[260px] md:h-[480px] 
            bg-white/5 backdrop-blur-xl md:rounded-2xl overflow-hidden 
            shadow-sm border border-white/10">
              <Image
                src={single?.HeroImg?.url}
                unoptimized
                alt={single?.HeroAltText || "Blog Image"}
                width={1200}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>


          </div>
        </div>

        {/* BLOG CONTENT */}
        <div className="max-w-6xl mx-auto space-y-8">

          {single.Content?.map((section) => (

            <div key={section?._id}>

              {/* TEXT */}
              <div className="quill-content">
               <div
  className="ql-editor !p-0 leading-relaxed text-white

  [&_h1]:text-[#5B23FF]
  [&_h2]:text-[#5B23FF]
  [&_h3]:text-[#5B23FF]
  [&_h4]:text-[#5B23FF]
  [&_h5]:text-[#5B23FF]
  [&_h6]:text-[#5B23FF]

  [&_p]:text-white
  [&_li]:text-white
  [&_span]:text-white

  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-3
  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mt-3

  [&_a]:text-blue-400

  [&_strong]:!text-white [&_b]:!text-white
  [&_strong]:font-semibold [&_b]:font-semibold

  [&_em]:text-white
"
  dangerouslySetInnerHTML={{
    __html: section?.content
      ?.replace(/style="[^"]*"/gi, "")
  }}
/>

              </div>

              {/* IMAGE */}
              {section?.img?.url && (
                <div className="w-full my-6">
                  <Image
                    src={section.img.url}
                    unoptimized
                    alt={section?.img?.altText || "Blog Image"}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="w-full h-[260px] md:h-[480px] rounded-xl object-cover 
                    shadow-sm border border-white/10"
                  />
                </div>
              )}

            </div>

          ))}

          {/* FAQs */}
          {single?.FAQs?.length > 0 && (
            <div className="mt-14">

              {/* HEADING */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 max-w-6xl mx-auto">

                {single.FAQs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-xl p-4 shadow-sm hover:shadow-lg transition duration-300"
                  >

                    {/* QUESTION */}
                    <summary className="flex justify-between items-center cursor-pointer list-none">

                      <span className="font-semibold group-hover:text-[#5B23FF] transition">
                        {faq.Q}
                      </span>

                      {/* ICON */}
                      <span className="ml-4 text-[#5B23FF] transition-transform duration-300 group-open:rotate-180">
                        ▼
                      </span>
                    </summary>

                    {/* ANSWER */}
                    <div className="mt-3 text-gray-400 leading-relaxed border-t border-white/10 pt-3">
                      {faq.A}
                    </div>

                  </details>
                ))}

              </div>

            </div>
          )}

        </div>

      </article>

    </div>
  )
}