import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MK몰",
  description: "민기몰에 오신걸 환영합니다",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
