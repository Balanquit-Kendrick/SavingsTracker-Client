import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession();

  // if (!session) redirect("/login");

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 ">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
