import { Navbar, Footer } from "@/components/layouts/user";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
