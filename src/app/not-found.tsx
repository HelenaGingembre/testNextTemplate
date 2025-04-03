import Link from "next/link";
import { AlertTriangle } from "@deemlol/next-icons";
import Right from "@/components/icons/Right";

const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <AlertTriangle size={50} color="orange" className="text-#37acb9-500" />
      <h1 className="text-6xl font-bold mb-4">404 Page non Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link href="/" className="btn rounded-md px-3 py-2 mt-4  flex gap-2">
        Home Page <Right />
      </Link>
    </section>
  );
};

export default NotFound;
