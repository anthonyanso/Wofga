import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <elevenlabs-convai agent-id="agent_01jzt21s9hee9rje4mxvrxev16"></elevenlabs-convai>
      <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
    </div>
  );
}
