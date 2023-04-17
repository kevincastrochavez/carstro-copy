import { createChatBotMessage } from 'react-chatbot-kit';

import IntroductoryOptions from './options/IntroductoryOptions';
import RepresentativeOptions from './options/RepresentativeOptions';

const config = {
  botName: 'Digital Assistant',
  initialMessages: [
    createChatBotMessage("I'm Carstro's chatbot! How can I help you?", {
      widget: 'introductoryOptions',
    }),
  ],
  widgets: [
    {
      widgetName: 'introductoryOptions',
      widgetFunc: (props) => <IntroductoryOptions {...props} />,
    },
    {
      widgetName: 'representativeOptions',
      widgetFunc: (props) => <RepresentativeOptions {...props} />,
    },
  ],
};

export default config;
