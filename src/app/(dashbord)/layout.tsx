import Logo from "@/components/layouts/Logo";

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-[15%] md:w-[10%] lg:w-[15%] bg-slate-200">
          <Logo />
        </div>
        <div className="w-[85%]  md:w-[90%] lg:w-[85%] bg-gray-300">
          {children}
        </div>
      </div>
    </>
  );
}
