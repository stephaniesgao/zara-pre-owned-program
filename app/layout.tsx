import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'ZARA — Pre-Owned Concept',description:'Unofficial academic concept. Discover Pre-Owned in your everyday shopping journey.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
