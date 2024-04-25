import "./globals.css";

export const metadata = {
  title: 'Pig Dice Game',
  description: 'Pig Dice Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
