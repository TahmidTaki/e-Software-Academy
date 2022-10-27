import React from "react";

const Blogs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-3xl text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                CORS
              </p>
              <p className="text-gray-600">5 Jan 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                What is CORS
              </p>
            </div>
            <p className="text-gray-700">
              Cross-Origin Resource Sharing (CORS) is an HTTP based mechanism to
              allow server to indicate any domain, scheme or port other than
              itself from which a browser should permit loading access. CORS
              also relies on a mechanism by which browsers make a 'preflight'
              request to the server hosting the cross-origin resource to check
              that the server will permit the actual request..
              <br />
              The CORS mechanism supports secure cross-origin requests and data
              transfers between browsers and servers. Modern browsers use CORS
              in APIs such as XMLHttpRequest to mitigate the risks of
              cross-origin HTTP requests.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-3xl text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Firebase Auth
              </p>
              <p className="text-gray-600">5 August 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                Firebase & Alternatives
              </p>
            </div>
            <p className="text-gray-700">
              Firebase Authentication is there to build secure authentication
              mechanism in an easier manner along with improving the sign-in and
              onboarding exprerience for end users. It eliminates the hassles of
              server upkeep, upgrades, security, and DevOps costs. Its
              functionalities include but not limited to supporting email and
              password accounts, phone authentication, Google, Twitter,
              Facebook, GitHub Login. It also makes easier for the developers to
              track users across the website, to get website visitor analytics
              and more. <br />
              <span className="text-primary-focus">
                Some of the alternatives to firebase authentication can be:
              </span>
              <ul>
                <div className="divider"></div>
                <li>
                  Auth0 is a service that allows you to authenticate and
                  authorize users. Any application can be connected to Auth0,
                  and the identity providers you want to utilize can be
                  specified. Choose one of its SDKs (or contact our API) that
                  best fits your app's technology and connect it to it. Auth0
                  will now verify a user's identity and transmit the necessary
                  information back to your app every time they attempt to
                  authenticate.
                </li>
                <div className="divider"></div>
                <li>
                  Amazon Cognito makes it simple to integrate user sign-up and
                  authentication into your web applications. Amazon Cognito also
                  lets you authenticate users using an external identity
                  provider and gives you temporary security credentials to
                  access your app's AWS backend resources or any service behind
                  Amazon API Gateway. It identifies the web and gives the user a
                  consistent identification throughout the application's
                  lifespan.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-3xl text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Private Route
              </p>
              <p className="text-gray-600">5 Jan 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                How does private route work
              </p>
            </div>
            <p className="text-gray-700">
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route. So if a user is
              not authorized for a specific page, they cannot access it. The
              most common example is authentication in a React application where
              a user can only access the protected pages when they are
              authorized (which means in this case being authenticated).
              Authorization goes beyond authentication though. For example, a
              user can also have roles and permissions which give a user access
              to specific areas of the application. Different user role can
              authorise different users to certain private route pages.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                className="transition-colors duration-200 text-3xl text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Node
              </p>
              <p className="text-gray-600">17 March 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                What is NodeJS
              </p>
            </div>
            <p className="text-gray-700">
              Node. js (Node) is an open source development platform for
              executing JavaScript code server-side. Node is useful for
              developing applications that require a persistent connection from
              the browser to the server and is often used for real-time
              applications such as chat, news feeds and web push notifications.
              <br />
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node. js wastes no time or
              resources on waiting for I/O requests to return. Sone benefits of
              NodeJs can be:
            </p>
            <ol className="bg-base-300 rounded-lg m-4">
              <li>High-performance for Real-time Applications.</li>
              <li>Easy Scalability for Modern Applications.</li>
              <li>Cost-effective with Fullstack JS.</li>
              <li>Community Support to Simplify Development.</li>
              <li>Easy to Learn and Quick to Adapt.</li>
              <li>Helps in building Cross-functional Teams.</li>
            </ol>
            <p>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
