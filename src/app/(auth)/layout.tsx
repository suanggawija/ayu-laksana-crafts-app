export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="">Auth Layout</div>
      {children}
    </div>
  );
}
