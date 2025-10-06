import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh bg-[#000018] flex gap-4">
      <Sidebar />
      {children}
    </main>
  );
}
