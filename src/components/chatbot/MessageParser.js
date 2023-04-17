class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes('shop') ||
      lowerMessage.includes('shop vehicle') ||
      lowerMessage.includes('shop a vehicle')
    ) {
      this.actionProvider.introInventory();
    } else if (
      lowerMessage.includes('dealer') ||
      lowerMessage.includes('find dealer') ||
      lowerMessage.includes('find a dealer')
    ) {
      window.location.href = '/salesRepresentatives';
    } else if (
      lowerMessage.includes('representative') ||
      lowerMessage.includes('chat representative') ||
      lowerMessage.includes('chat with representative')
    ) {
      this.actionProvider.handleChatRepresentative();
    } else if (
      lowerMessage.includes('sales') ||
      lowerMessage.includes('sales information') ||
      lowerMessage.includes('representative information') ||
      lowerMessage.includes('representatives information') ||
      lowerMessage.includes('sales representative information') ||
      lowerMessage.includes('sales representatives information') ||
      lowerMessage.includes('see sales representative information') ||
      lowerMessage.includes('see sales representatives information')
    ) {
      window.location.href = '/salesRepresentatives';
    } else if (
      lowerMessage.includes('chat') ||
      lowerMessage.includes('agent') ||
      lowerMessage.includes('chat agent') ||
      lowerMessage.includes('chat with agent')
    ) {
      this.actionProvider.handleChatWithAgent();
    } else {
      this.actionProvider.handleLastText();
    }
  }
}

export default MessageParser;
