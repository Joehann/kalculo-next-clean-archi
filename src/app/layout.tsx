"use client"
import { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "@/core/providers/queryClient"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}
