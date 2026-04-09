import "./globals.css";
import { Inter, Geist } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archery Club @ UCR",
  description: "Archery Club at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`overflow-x-hidden ${inter.className}`}>
        <ReactQueryClientProvider>
          <Navbar />

          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
