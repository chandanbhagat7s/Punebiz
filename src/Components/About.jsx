import img from "./../assets/contact.png";

export default function About() {
  return (
    <>
      <div className="max-w-full mx-auto ">
        <div
          className="w-full h-[80vh] bg-cover bg-center mb-4 "
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="flex h-full w-full items-end justify-center bg-gradient-to-t from-black to-transparent p-5">
            <h1 className="text-5xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row p-4">
        <div className="w-100 lg:w-50 rounded p-3">
          <img
            alt="Vision"
            className="w-full rounded p-3"
            src={img}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-100 lg:w-50 p-3 d-flex justify-content-center align-items-center flex-col">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Vision</h2>
          <p className="text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting ind
            ssentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row-reverse p-4">
        <div className="w-100 lg:w-50 rounded p-3">
          <img
            alt="Vision"
            className="w-full rounded p-3"
            src={img}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-100 lg:w-50 p-3 d-flex justify-content-center align-items-center flex-col">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Vision</h2>
          <p className="text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting ind
            ssentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row p-4">
        <div className="w-100 lg:w-50 rounded p-3">
          <img
            alt="Vision"
            className="w-full rounded p-3"
            src={img}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-100 lg:w-50 p-3 d-flex justify-content-center align-items-center flex-col">
          <h2 className="text-2xl font-semibold mt-4 mb-2">Vision</h2>
          <p className="text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting ind
            ssentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
