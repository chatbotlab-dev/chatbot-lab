export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  codeSnippet?: string;
  suggestions?: string[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  role: string;
  category: string;
  systemInstruction: string;
  sampleUserMessage: string;
  sampleAiResponse: string;
  recommendedTemp: number;
}

export interface IntegrationCodeExample {
  title: string;
  language: string;
  filename: string;
  code: string;
  description: string;
}
