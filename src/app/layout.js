import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "../store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Point Of Sale",
  description: "Point of Sale: online point of sale system for small retail businesses. Use our cloud POS to track customers, inventory and sales. Integrates with WooCommerce for a total web-based POS system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ReduxProvider> {children} </ReduxProvider>
      </body>
    </html>
  );
}
