function generateGreeting(name, language = 'English') {
    const greetings = {
      English: `Hello, ${name}!`,
      Spanish: `¡Hola, ${name}!`,
      French: `Bonjour, ${name}!`,
    };
  
    return greetings[language] || `Hello, ${name}!`; 
  }
  
  console.log(generateGreeting("Alice"));
  console.log(generateGreeting("Bob", "Spanish"));
  console.log(generateGreeting("Charlie", "French"));
  