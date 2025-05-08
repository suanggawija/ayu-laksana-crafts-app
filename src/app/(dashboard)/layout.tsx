import { Aside, Footer, Navbar } from "@/components/layouts/dashboard";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex px-4 py-2 bg-gray-100 min-h-screen">
      <Aside />
      <div className="flex flex-col px-4 w-full">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
