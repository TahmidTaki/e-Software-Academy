import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Learning</span>
            </span>{" "}
            with e-Software-Academy FAQ
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Our mission is to create new possibilities for people and
            organizations everywhere. Our global marketplace features an
            extensive, multi-language library, which includes thousands of
            courses taught by real-world experts. You can take courses across a
            wide range of categories, some of which include: Software &
            entrepreneurship, programming, academics and much more!
          </p>
        </div>
        <div className="space-y-4">
          <Item title="What do e-Software-Academy courses include??">
            Each of our course is created, owned and managed by the
            instructor(s). The foundation of each Udemy course are its lectures,
            which can include videos, slides, and text. In addition, instructors
            can add resources and various types of practice activities, as a way
            to enhance the learning experience of students.
          </Item>
          <Item title="Is e-Soft-Academy an accredited institution?">
            While e-Soft-Academy is not an accredited institution, we offer
            skills-based courses taught by real-world experts in their field.
            Every approved, paid course features a certificate of completion to
            document your accomplishment.
          </Item>
          <Item title="What if I don’t like a course I purchased?!?">
            We want you to be satisfied, so all eligible courses purchased on
            e-Soft-Academy can be refunded within 30 days. If you are unhappy
            with a course, you can request a refund, provided the request meets
            the guidelines in our refund policy.
          </Item>
          <Item title="Where can I go for help??">
            If you find you have a question about a paid course while you’re
            taking it, you can search for answers to your question in the Q&A or
            ask the instructor. Our Help Center has extensive information
            regarding e-soft-academy various features, and articles with
            troubleshooting steps to help you quickly resolve any issues you
            encounter. Our support team is also happy to help.
          </Item>
        </div>
      </div>
    </div>
  );
};
