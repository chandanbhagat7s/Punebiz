import Sel from "./SmallComponetns/Sel";

export default function SLBox() {
  return (
    <div className="grid w-full gap-4 md:grid-cols-2 items-center p-4 md:gap-6">
      <div className="flex items-center justify-center w-full rounded-lg text-gray-900 dark:text-gray-900">
        <Sel />
      </div>

      <div className="flex items-center justify-center w-full rounded-lg text-gray-900 dark:text-gray-900">
        <input
          className="flex h-10 w-50 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="search"
          placeholder="Search..."
          type="text"
        />
      </div>
    </div>
  );
}
