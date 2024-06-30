// import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import { Bounce, ToastContainer } from "react-toastify";
import { Suspense } from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const xeroda = localfont({
  src: [
    {
      path: "../../public/xeroda-font/XerodaRegular-p7dwr.otf",
    },
  ],
  variable: "--font-xeroda",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Main website for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        {/* <link rel="icon" type="image/x-icon" href="@/public/favicon.ico" /> */}
        <title>Decoding The Future</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decodingthefuture.xyz" />
        <meta
          property="og:title"
          content="Registration | Decoding The Future"
        />
        <meta
          property="og:description"
          content="Main website for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1794030166236090368/g5Sl3KvE_400x400.jpg"
        />
        <meta
          name="twitter:card"
          content="Main website for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta name="twitter:url" content="https://x.com/Focosauniuyo" />
        <meta
          name="twitter:title"
          content="Registration | Decoding The Future"
        />
        <meta
          name="twitter:description"
          content="Main website for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1794030166236090368/g5Sl3KvE_400x400.jpg"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </head>
      <body
        className={`${xeroda.variable} ${montserrat.className} h-full relative bg-[#0f1114] text-white`}
      >
        <Suspense fallback={<div className="w-full min-h-screen text-white flex items-center justify-center">Welcome</div>}>
          <GlobalStateProvider>
            {children}
            <ToastContainer
              theme="dark"
              position="top-right"
              autoClose={5000}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </GlobalStateProvider>
        </Suspense>
      </body>
    </html>
  );
}
