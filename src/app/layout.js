import { Inter } from "next/font/google";
import "./globals.css";
import Mynav from "@/components/Mynav/Mynav";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster"
import Whatsapp from "@/components/Whatsapp/Whatsapp";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Saw Industrial",
  description: "Industrial and automation parts",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <Whatsapp/>
      <Mynav />
              {children}
              <Footer/>
              <Toaster />
            
       </body>
    </html>
  );
}
