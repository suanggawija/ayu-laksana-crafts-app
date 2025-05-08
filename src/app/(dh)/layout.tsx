export default function DhLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="">Dh Layout</div>
      {children}
    </div>
  );
}
