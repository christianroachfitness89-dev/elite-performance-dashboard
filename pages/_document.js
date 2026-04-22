import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  display: ['Bebas Neue', 'sans-serif'],
                  body: ['Inter', 'sans-serif'],
                  mono: ['JetBrains Mono', 'monospace']
                }
              }
            }
          }
        `}} />
        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(28, 28, 28, 0.5); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(209, 45, 48, 0.3); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(209, 45, 48, 0.5); }
          .agent-card { transition: all 0.3s ease; }
          .agent-card:hover { transform: translateY(-4px); }
        `}} />
      </Head>
      <body style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #1C1C1C 100%)'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
