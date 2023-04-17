class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setStateFunc = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setStateFunc((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  introInventory = () => {
    window.location.href =
      'http://localhost:3000/inventory?minPrice=23499&maxPrice=420000&minMileage=1300&maxMileage=240483';
  };

  handleChatRepresentative = () => {
    const message = this.createChatbotMessage(
      'We have the best sales representatives just for you!',
      {
        widget: 'representativeOptions',
      }
    );

    this.addMessageToState(message);
  };

  handleChatWithAgent = () => {
    const message = this.createChatbotMessage(
      'Did not find what you were looking for? Let us know how we can help you'
    );

    this.addMessageToState(message);
  };

  handleLastText = () => {
    const message = this.createChatbotMessage(
      'We will work on your request as soon as possible. Thank you for choosing Carstro. If you can help in anything else, please select one of the options:',
      {
        widget: 'introductoryOptions',
      }
    );

    this.addMessageToState(message);
  };
}

export default ActionProvider;
