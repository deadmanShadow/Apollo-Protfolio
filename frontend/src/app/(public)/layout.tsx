import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { ReactNode } from "react";

const PublicLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-8 px-4">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};
export default PublicLayout;
