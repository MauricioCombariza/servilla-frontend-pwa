// jest.setup.js
// Mock SpeechRecognition
class MockSpeechRecognition {
    constructor() {
      this.isListening = false;
      this.lang = 'es-ES';
      this.continuous = true;
      this.interimResults = true;
      this.result = [];
  
      // Simular eventos
      this.onresult = null;
      this.onend = null;
    }
  
    start() {
      this.isListening = true;
      // Aquí puedes simular resultados si deseas
    }
  
    stop() {
      this.isListening = false;
      if (this.onend) {
        this.onend();
      }
    }
  
    abort() {
      this.isListening = false;
    }
  }
  
  // Asignar el mock al objeto global
  global.SpeechRecognition = MockSpeechRecognition;
  global.webkitSpeechRecognition = MockSpeechRecognition; // Para compatibilidad
  