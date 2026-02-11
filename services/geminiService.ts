import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  if (!apiKey) {
    return "Erro: Chave de API não configurada. Por favor, configure a chave API_KEY.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "Você é o Assistente Virtual da 'Constructora Elite', uma empresa de engenharia civil de alto padrão. Seu objetivo é ajudar potenciais clientes com dúvidas sobre obras, reformas, custos estimados (dê apenas faixas de preço genéricas e sugira contato profissional), e explicar os serviços da empresa (Projetos, Reformas, Construção Residencial e Comercial). Seja profissional, cordial, conciso e sempre tente direcionar o usuário para agendar uma visita ou preencher o formulário de contato. Responda em Português do Brasil.",
      },
      history: history,
    });

    const result = await chat.sendMessage({
        message: message
    });
    
    return result.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Desculpe, estou tendo dificuldades técnicas no momento. Por favor, tente novamente mais tarde ou entre em contato diretamente pelo nosso WhatsApp.";
  }
};