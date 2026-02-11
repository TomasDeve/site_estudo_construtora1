import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da Construtora Elite. Como posso ajudar com seu projeto hoje?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getMockResponse = (text: string): string => {
    const lower = text.toLowerCase();
    
    if (lower.includes('preço') || lower.includes('custo') || lower.includes('orçamento') || lower.includes('valor')) {
      return "Como cada obra é única, precisamos entender seu projeto para dar um orçamento preciso. Por favor, preencha o formulário na seção 'Contato' ou nos chame no WhatsApp!";
    }
    
    if (lower.includes('contato') || lower.includes('telefone') || lower.includes('email') || lower.includes('ligar')) {
      return "Você pode entrar em contato conosco pelo telefone (11) 99999-9999, pelo e-mail contato@construtoraelite.com.br ou visitando nosso escritório na Av. Paulista.";
    }

    if (lower.includes('projeto') || lower.includes('arquitetura') || lower.includes('planta')) {
      return "Realizamos projetos arquitetônicos completos, além da execução da obra. Temos uma equipe de engenheiros e arquitetos prontos para transformar sua ideia em realidade.";
    }

    if (lower.includes('reforma') || lower.includes('residencial') || lower.includes('comercial')) {
      return "Somos especialistas tanto em construção residencial quanto comercial, além de reformas de alto padrão. Você já possui o terreno ou imóvel?";
    }

    return "Entendi. Para te atender melhor e com mais agilidade, recomendo clicar no botão de WhatsApp aqui no site ou preencher nosso formulário de contato. Nossa equipe técnica retornará em breve!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simular delay de rede
    setTimeout(() => {
      const responseText = getMockResponse(userMessage.text);
      const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center ${
          isOpen ? 'bg-red-500 text-white' : 'bg-brand-900 text-white'
        }`}
        aria-label="Chat com Assistente Virtual"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 fade-in">
          {/* Header */}
          <div className="bg-brand-900 p-4 flex items-center space-x-3 text-white">
            <div className="p-2 bg-white/10 rounded-full">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Assistente Elite</h3>
              <p className="text-xs text-brand-200">Online agora</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-transparent transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="p-1.5 bg-brand-600 text-white rounded-full hover:bg-brand-700 disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-gray-400">Atendimento Automático</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};