/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p5u7DiZaQZ4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Button } from "@/components/ui/button";
// import { CardContent, Card } from "@/components/ui/card";

import { Card, CardContent } from "@mui/material";
import { Button } from "react-bootstrap";

import { IoImages } from "react-icons/io5";

export default function Advertisement() {
  return (
    <>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center mb-10 bg-[#EEE] p-6">
          Subscription Plans
        </h1>

        <div className="max-w-4xl mx-auto my-8 space-y-12 ">
          <div className="">
            <h1 className="text-3xl font-bold mb-6">Main Page</h1>
            <div className="flex flex-col justify-around lg:flex-row lg:justify-around">
              <Card className="lg:w-[300px] border border-black lg:m-0 m-6">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="mb-4">
                    <IoImages className="text-7xl" />
                  </div>
                  <p className="text-lg font-semibold">Carousals</p>
                  <Button className="mt-4" variant="outline">
                    Edit
                  </Button>
                </CardContent>
              </Card>
              <Card className="lg:w-[300px] border border-black">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="mb-4">
                    <div className="mb-4">
                      <IoImages className="text-7xl" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold">Fixed Banner 2</p>
                  <Button className="mt-4" variant="outline">
                    Edit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6">Category Page</h1>
            <div className="flex justify-between space-x-4">
              <Card className="w-[300px] border border-black">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="mb-4">
                    <div className="mb-4">
                      <IoImages className="text-7xl" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold">Carousals</p>
                  <Button className="mt-4" variant="outline">
                    Edit
                  </Button>
                </CardContent>
              </Card>
              <Card className="w-[300px] border border-black">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="mb-4">
                    <div className="mb-4">
                      <IoImages className="text-7xl" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold">Fixed Banner 2</p>
                  <Button className="mt-4" variant="outline">
                    Edit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
