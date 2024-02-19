// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
// import Link from "next/link"
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { ResponsiveBar } from "@nivo/bar"

import { Avatar, Card, CardContent, CardHeader, Link } from "@mui/material";
import { Button, CardTitle, Image } from "react-bootstrap";
import { FaBuildingColumns } from "react-icons/fa6";
import Charts from "./Chart";
import AdminSub from "./AdminSub";
import AdminMain from "./AdminMain";
import BasicTable from "./TableB";
import T from "./T";
import EditCard from "./EditCards";
import CreateUser from "./CreateUser";

export default function AdminDash() {
  return (
    <div className="flex h-auto">
      <aside className="w-64 bg-gray-800 text-white ">
        <div className="flex flex-col items-center py-6 rounded-full">
          <Image
            alt="Admin"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SQGQRq2XYAV7IP-YAjF16UYQ_eRGupVRK3Ke8m10Aw&s"
            className="rounded-full"
          />

          <span className="mt-2 text-sm font-semibold">Admin</span>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 p-0">
            <li>
              <Link
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                href="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <HomeIcon className="mr-3 h-5 w-5" />
                Home
                {"\n                      "}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                style={{
                  textDecoration: "none",
                }}
                href="#"
              >
                <BuildingIcon className="mr-3 h-5 w-5" />
                Businesses{"\n                      "}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                style={{
                  textDecoration: "none",
                }}
                href="#"
              >
                <CreditCardIcon className="mr-3 h-5 w-5" />
                Subscription{"\n                      "}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                style={{
                  textDecoration: "none",
                }}
                href="#"
              >
                <MegaphoneIcon className="mr-3 h-5 w-5" />
                Advertisement{"\n                      "}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                style={{
                  textDecoration: "none",
                }}
                href="#"
              >
                <UsersIcon className="mr-3 h-5 w-5" />
                Users{"\n                      "}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                style={{
                  textDecoration: "none",
                }}
                href="#"
              >
                <LogOutIcon className="mr-3 h-5 w-5" />
                Log Out{"\n                      "}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* <AdminSub /> */}
      {/* <T /> */}
      {/* <EditCard /> */}
      {/* <AdminMain /> */}
      <CreateUser />
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MegaphoneIcon(props) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
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
