/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Attribution from "@/components/attribution";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Newsletter sign-up form with success message",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Attribution />
      </body>
    </html>
  );
}
