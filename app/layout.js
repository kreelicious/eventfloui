import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EventFlo UI",
  description: "Frontend Code for EventFlo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
