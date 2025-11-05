import type { Metadata } from 'next';
import { Inter, Poppins, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Juan Andrés García | Senior BI Analyst',
  description: 'Ex-Graphite contractor specializing in SaaS metrics, Power BI, and Looker Studio. 6+ years transforming data into strategic insights.',
  keywords: [
    'Business Intelligence',
    'Power BI',
    'Looker Studio',
    'BigQuery',
    'SaaS Metrics',
    'Data Analytics',
    'ARR',
    'MRR',
    'Churn Analysis',
    'Juan Andrés García',
  ],
  authors: [{ name: 'Juan Andrés García' }],
  creator: 'Juan Andrés García',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://juanandresgarcia.com',
    title: 'Juan Andrés García | Senior BI Analyst',
    description: 'Ex-Graphite contractor specializing in SaaS metrics, Power BI, and Looker Studio.',
    siteName: 'Juan Andrés García Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Andrés García | Senior BI Analyst',
    description: 'Ex-Graphite contractor specializing in SaaS metrics, Power BI, and Looker Studio.',
    creator: '@juanandresgarcia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="relative min-h-screen bg-slate-950 text-white">
          {/* Background gradient */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
