'use client'

import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from '../store/store';

const metadata: Metadata = {
  title: "Pokemon Examedi",
  description: "Front-end assignment from examedi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <main className="relative overflow-hidden">
            {children}
          </main>
        </body>
      </html>
    </Provider>
  )
}
