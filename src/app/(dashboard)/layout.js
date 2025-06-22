import { SidebarProvider } from "@/components/sidebar-context";
import { Sidebar } from "@/components/ui/app-sidebar";
import { Header } from "@/components/ui/app-header";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-[100vh]">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}