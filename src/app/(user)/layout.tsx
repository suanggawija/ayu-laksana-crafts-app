import { Navbar, Footer } from "@/components/layouts/user";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="">User Layout</div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
