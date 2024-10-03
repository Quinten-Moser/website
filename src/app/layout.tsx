import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { MainLayout } from "@/layouts";
import { ParentProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Quinten Moser - Company Website",
  description: "Official website of Quinten Moser, a software company.",
  applicationName: "Quinten Moser's Company Website",
  authors: {
    name: "Quinten Moser",
  },
  icons: "/favicon.ico",
  openGraph: {
    title: "Quinten Moser - Company Website",
    description: "Official website of Quinten Moser, a software company.",
    url: "https://quintenmoser.com",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ParentProvider>
          <Analytics />
          <MainLayout>{children}</MainLayout>
        </ParentProvider>
      </body>
    </html>
  );
}
