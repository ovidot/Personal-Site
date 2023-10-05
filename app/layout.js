import "./globals.css";
import { Noto_Serif } from "next/font/google";

const inter = Noto_Serif({
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: "Uzezi Ovraiti",
  description: "Uzezi's Personal portfolio",
  icons: {
    icon: { url: "/uzi-dark.svg", type: "image/svg" },
    shortcut: { url: "/uzi-dark.svg", type: "image/svg" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
