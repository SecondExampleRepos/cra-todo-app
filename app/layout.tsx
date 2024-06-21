import type { Metadata } from 'next'
import 'src/App.css'

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created using create-react-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}