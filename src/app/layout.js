import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/componets";
import Footer from "@/componets/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default:'Pillarfin Solutions-Data Analytics, Saas Solutions, Product Development, Cybersecurity, Cloud Adoption, IT Consulting, Data Protection.',
    template: '%s - Pillarfin Solutions.'
  },
  description: `Pillarfin Solutions provides top-tier services in Data Analytics, SaaS Solutions, Product Development, 
  Cybersecurity, Cloud Adoption, IT Consulting, and Data Protection. We help businesses leverage technology to drive success`,
  twitter:{
    card:'summary-large-card'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <navbar>
          <Navbar />
        </navbar>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
