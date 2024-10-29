import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { FaComments } from 'react-icons/fa';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Roboto',
  headerBgColor: '#007bff',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#007bff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello! Welcome to Cue-Bar Communications. How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Learn about services', trigger: '3' },
      { value: 2, label: 'Equipment information', trigger: '4' },
      { value: 3, label: 'Contact details', trigger: '5' },
      { value: 4, label: 'Speak to a representative', trigger: '6' },
    ],
  },
  {
    id: '3',
    message: 'We offer system integration, studio design, installation, training, and after-sales support. Would you like to know more about any specific service?',
    trigger: '2',
  },
  {
    id: '4',
    message: 'We provide a wide range of broadcast equipment including studio cameras, field cameras, gallery equipment, NLE benches, servers, and more. What specific equipment are you interested in?',
    trigger: '2',
  },
  {
    id: '5',
    message: 'You can reach us at:\nPhone: +254 (0)724 840806\nEmail: jeff.amon@cue-bar.communications.com\nLocation: Nairobi, Kenya',
    trigger: '2',
  },
  {
    id: '6',
    message: 'Please email us at jeff.amon@cue-bar.communications.com or call +254 (0)724 840806, and our team will assist you promptly.',
    trigger: '2',
  },
];

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaComments className="text-2xl" />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl">
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              hideHeader={false}
              headerTitle="Cue-Bar Assistant"
              placeholder="Type your message..."
              width="300px"
              enableMobileAutoFocus={false}
              hideSubmitButton={true}
              hideUserAvatar={true}
              botDelay={1000}
              customStyle={{
                boxShadow: 'none',
                border: '1px solid #e2e8f0',
              }}
            />
          </ThemeProvider>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;