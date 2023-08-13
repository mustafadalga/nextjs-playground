import Header from "./components/Header";
import { ThemeProvider } from "./contexts/theme/ThemeProvider";
import "./globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <ThemeProvider>
        <Header />
        <div className="mt-20">
        {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}