import { Hanalei_Fill } from "next/font/google";
import "./globals.css";

const hanaleiFill = Hanalei_Fill({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hanalei-fill",
});

export const metadata = {
  title: "Hi there!",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hanaleiFill.variable}`}>{children}</body>
    </html>
  );
}
