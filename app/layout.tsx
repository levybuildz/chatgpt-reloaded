import SideBar from "../components/SideBar";
import Login from "../components/Login";
import "../styles/globals.css";
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import ClientProvider from "../components/ClientProvider";
import MobileNav from "../components/MobileNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="overflow-hidden w-full h-full relative scrollbar-hide">
              <div className="flex h-screen flex-1 flex-col md:pl-[260px]">
                <MobileNav />
                <ClientProvider />

                <div className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1 dark:bg-gpt-gray-1 bg-white">
                  {children}
                </div>
              </div>
              <div className="hidden h-screen bg-gpt-dark md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
                <SideBar />
                {/* <SideNavBar /> */}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
