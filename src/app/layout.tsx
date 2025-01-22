import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge"; //Tailwind merge is to add the font directly to the body!!!!!!!!!!!!!!!!!!!!!!!!!!!

// layout.tsx or _app.tsx


// Font Variable to use them in the Projects
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Shivam's Portfolio",
  description:
    "Aspiring developer with a passion for learning and a drive to make a positive impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "custom-background text-white antialiased font-sans relative min-h-screen overflow-x-hidden"
        )}
      >
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
