// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

import { Button, Input, TextareaAutosize } from "@mui/material";

export default function AboutNew() {
  return (
    <div className="w-full">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container grid items-center gap-4 px-4 space-y-4 lg:grid-cols-12 lg:gap-10 xl:px-6">
          <div className="flex flex-col justify-center space-y-2 lg:col-span-6 lg:space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              About Us
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              We are a team of passionate individuals dedicated to creating
              innovative solutions that make a difference.
            </p>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-[2/1] rounded-xl overflow-hidden lg:col-span-6 object-cover"
            height="300"
            src="https://previews.123rf.com/images/rawpixel/rawpixel1501/rawpixel150100154/35328040-business-team-at-a-meeting.jpg"
            width="600"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start gap-10 px-4 space-y-4 lg:grid-cols-12 lg:gap-16 xl:px-6">
          <div className="flex flex-col justify-center space-y-2 lg:col-start-2 lg:col-span-5 lg:space-y-4">
            <div className="flex items-center space-x-4">
              <BriefcaseIcon className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Mission
              </h2>
            </div>
            <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
              We are committed to empowering businesses by providing them with
              the tools and resources they need to thrive in the digital age.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2 lg:col-start-7 lg:col-span-5 lg:space-y-4">
            <div className="flex items-center space-x-4">
              <HeartIcon className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Values
              </h2>
            </div>
            <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
              Integrity, innovation, collaboration, and inclusivity are the core
              values that guide our work and interactions.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2 lg:col-start-2 lg:col-span-10 lg:space-y-4">
            <div className="flex items-center space-x-4">
              <UsersIcon className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Team
              </h2>
            </div>
            <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
              Meet the talented individuals who drive our company forward.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-2 lg:col-span-2 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team is passionate about the web and dedicated to providing
              the best platform for developers.
            </p>
          </div>
          <div className="mx-auto grid gap-4 sm:gap-6 lg:grid-cols-2">
            <div className="mx-auto grid gap-2">
              <img
                alt="User"
                className="mx-auto rounded-full"
                height="150"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="mx-auto grid gap-1">
                <h3 className="text-lg font-bold">Alice Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Product Manager
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-2">
              <img
                alt="User"
                className="mx-auto rounded-full"
                height="150"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="mx-auto grid gap-1">
                <h3 className="text-lg font-bold">Bob Smith</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-2">
              <img
                alt="User"
                className="mx-auto rounded-full"
                height="150"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="mx-auto grid gap-1">
                <h3 className="text-lg font-bold">Ella Brown</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  UX Designer
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-2">
              <img
                alt="User"
                className="mx-auto rounded-full"
                height="150"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="mx-auto grid gap-1">
                <h3 className="text-lg font-bold">Mike Wilson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-2 lg:col-span-2 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Expertise
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We're the best at what we do. Our team has the skills and
              knowledge to deliver exceptional results.
            </p>
          </div>
          <div className="mx-auto grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="mx-auto grid gap-2">
              <LayoutIcon className="mx-auto w-12 h-12 rounded-lg  p-3/4 aspect-square  " />
              <div className="mx-auto grid gap-1">
                <h3 className="text-xl font-bold">Design Systems</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We create beautiful and functional design systems that make
                  your app shine.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-2">
              <ApertureIcon className="mx-auto w-12 h-12 rounded-lg  p-3/4 aspect-square  " />
              <div className="mx-auto grid gap-1">
                <h3 className="text-xl font-bold">APIs</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our APIs are reliable, fast, and easy to use, allowing you to
                  build amazing experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-2">
              <ActivityIcon className="mx-auto w-12 h-12 rounded-lg  p-3/4 aspect-square  " />
              <div className="mx-auto grid gap-1">
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We optimize your site for speed, ensuring that your users get
                  a snappy experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-2">
              <LockIcon className="mx-auto w-12 h-12 rounded-lg  p-3/4 aspect-square  " />
              <div className="mx-auto grid gap-1">
                <h3 className="text-xl font-bold">Security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your app is in safe hands. We take security seriously and
                  protect you from threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function ApertureIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" x2="20.05" y1="8" y2="17.94" />
      <line x1="9.69" x2="21.17" y1="8" y2="8" />
      <line x1="7.38" x2="13.12" y1="12" y2="2.06" />
      <line x1="9.69" x2="3.95" y1="16" y2="6.06" />
      <line x1="14.31" x2="2.83" y1="16" y2="16" />
      <line x1="16.62" x2="10.88" y1="12" y2="21.94" />
    </svg>
  );
}

function LayoutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
