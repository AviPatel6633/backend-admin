import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Roboto_Mono } from 'next/font/google'
import HeaderExport from "@/component/header/headerExport";
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: "Admin",
  description: "By Avi Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto_mono.className}`}>
        <HeaderExport/>
        {children}
      </body>
    </html>
  );
}
