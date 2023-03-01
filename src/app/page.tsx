import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex justify-center align-middle flex-col  w-96 space-y-10 p-10`}
    >
      <div className="flex items-center shadow-md p-6 rounded-xl  space-x-10 dark:bg-purple-900">
        <Image src="next.svg" alt="" width={100} height={60} />
        <div>
          <div className="text-xl font-medium text-green-700 md:text-red-500 sm:text-blue-600 dark:text-white">
            hello
          </div>
          <div className="text-gray-800 dark:text-white">
            Awesome description
          </div>
        </div>
      </div>
      <input
        type="text"
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-700 rounded-md shadow-md p-2"
        placeholder="hello"
      />

      <div className="p-10 shadow-md rounded-md group hover:bg-cyan-800  active:animate-spin">
        <h1 className="group-hover:text-white">test</h1>
      </div>

      <button className="p-2 rounded-md bg-yellow-600 active:ring-2 active:ring-yellow-600 border-transparent">
        dark mode
      </button>
    </main>
  );
}
