import Logo from "@/components/layouts/Logo";
import Menu from "@/components/layouts/Menu";
import Navbar from "@/components/Navbar";

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-[15%] md:w-[10%] lg:w-[15%] bg-slate-200 p-5">
          <Logo />
          <Menu />
        </div>
        <div className="w-[85%]  md:w-[90%] lg:w-[85%] bg-gray-300 overflow-scroll">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
