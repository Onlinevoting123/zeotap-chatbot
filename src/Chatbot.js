import { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://chatling.ai/js/embed.js';
    script.async = true;
    script.id = 'chatling-embed-script';
    script.setAttribute('data-id', '1724767666');
    script.setAttribute('data-display', 'fullscreen');

    // Add the configuration object to the window
    window.chtlConfig = {
      chatbotId: '1724767666',
      display: 'fullscreen',
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No need to render anything, the script does everything
};

export default ChatbotEmbed;
