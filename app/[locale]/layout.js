import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "sonner";
import "./globals.css";
import { NextAuthProviders } from "./Providers";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Garsonline",
  description: "",
};
export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextAuthProviders>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ClientLayout>{children}</ClientLayout>
          </NextIntlClientProvider>
        </body>
        <Toaster />
      </NextAuthProviders>
    </html>
  );
}
