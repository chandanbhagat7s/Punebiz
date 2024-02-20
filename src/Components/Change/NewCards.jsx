import Type from "./Type";

export default function NewCards() {
  return (
    <div className="flex justify-content-center align-items-center flex-col lg:flex-row lg:space-x-8 bg-white w-full text-white px-12 py-4  ">
      <div className="flex flex-col items-center p-6 bg-black relative basis-1/2 w-full lg:w-50 rounded lg:mb-0 mb-2">
        <img
          alt="Camera Lens"
          className="absolute inset-0 h-full w-full object-cover rounded"
          height="200"
          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/11/best-dslr-camera-lenses.jpg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        {/* <h1 className="text-4xl font-bold z-[100]">Aasif Photography</h1> */}
        <p className="text-4xl font-bold z-[100]">
          {" "}
          <Type text={"Aasif Photography"} color={"white"} size={"text-4xl"} />
        </p>

        <p className="text-sm uppercase tracking-widest z-[100]">
          Photographer
        </p>
        <div className="mt-4 flex flex-col space-y-2 z-[100]">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="text-cyan-400" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <MailboxIcon className="text-cyan-400" />
            <span>hello@reallygreatsite.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <LocateIcon className="text-cyan-400" />
            <span>123 Anywhere St., Any City</span>
          </div>
          <a className="text-cyan-400" href="#">
            www.reallygreatsite.com
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start p-6 bg-black  relative basis-1/2 w-full lg:w-50 lg:mt-0 rounded  ">
        <img
          alt="Camera Lens"
          className="absolute inset-0 h-full w-full object-cover rounded"
          height="200"
          src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak="
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <h2 className="text-xl font-bold z-[100]">CHORDZ</h2>
        <h1 className="text-4xl font-bold z-[100] mt-5">
          <Type text={"Business"} size={"text-5xl"} />
        </h1>
        <h1 className="text-4xl font-bold z-[100] mb-5">
          {" "}
          <Type text={"STRATEGY"} size={"text-3xl"} />
        </h1>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailboxIcon(props) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
