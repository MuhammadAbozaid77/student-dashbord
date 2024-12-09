import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="border border-red-300 p-5">
        <Link href={"/"}> Logo </Link>
      </div>
    </>
  );
}
