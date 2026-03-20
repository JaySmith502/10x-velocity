import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Outlet } from "react-router-dom";

const useChatWidgetH1Fix = () => {
  useEffect(() => {
    const fixChatH1 = (): boolean => {
      const chatH1 = document.querySelector('.chat-layout .chat-header h1');
      if (chatH1 && chatH1.parentNode) {
        const span = document.createElement('span');
        span.innerHTML = chatH1.innerHTML;
        span.className = chatH1.className;
        const style = chatH1.getAttribute('style');
        if (style) span.setAttribute('style', style);
        chatH1.parentNode.replaceChild(span, chatH1);
        return true;
      }
      return false;
    };

    if (fixChatH1()) return;

    const observer = new MutationObserver(() => {
      if (fixChatH1()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
};

const RootLayout = () => {
  useChatWidgetH1Fix();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
