import { Navbar, Footer } from "@/components/layouts/user";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
