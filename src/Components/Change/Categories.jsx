import imgs from "./../../assets/milk.png";
import imgs1 from "./../../assets/medi.png";
import imgs2 from "./../../assets/hospital.png";
import imgs3 from "./../../assets/home.png";
import imgs4 from "./../../assets/fur.png";
import imgs5 from "./../../assets/fasion.png";
import imgs6 from "./../../assets/exe.png";
export default function CategoriNew() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-4 md:p-6 bg-white-100 my-2 lg:mx-4">
      <div className="flex flex-col items-center">
        <img
          alt="Grocery"
          className="mb-2"
          height="80"
          src={imgs}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Grocery</span>
      </div>

      <div className="flex flex-col items-center">
        <img
          alt="Home & Furniture"
          className="mb-2"
          height="80"
          src={imgs5}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Home & Furniture</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Appliances"
          className="mb-2"
          height="80"
          src={imgs}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Appliances</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Travel"
          className="mb-2"
          height="80"
          src={imgs}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Travel</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Travel"
          className="mb-2"
          height="80"
          src={imgs1}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Travel</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Travel"
          className="mb-2"
          height="80"
          src={imgs2}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Travel</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Travel"
          className="mb-2"
          height="80"
          src={imgs3}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Travel</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Beauty, Toys & More"
          className="mb-2"
          height="80"
          src={imgs4}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <span>Beauty, Toys & More</span>
      </div>
    </div>
  );
}
