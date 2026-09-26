"use client";

import React, { useState, useRef, useEffect } from "react";
import { PRESET_PROMPTS, answerPortfolioQuery } from "@/data/portfolio-ai";
import { Sparkles, X, Send, Bot, User, CornerDownLeft, RotateCcw } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi, I'm Gaurav's portfolio assistant. Ask me about his agentic systems, WTI Cabs pipeline, Shinra, or his engineering stack.",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate grounded inference delay
    setTimeout(() => {
      const responseText = answerPortfolioQuery(query);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: responseText,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "assistant",
        text: "Hi, I'm Gaurav's portfolio assistant. Ask me about his agentic systems, WTI Cabs pipeline, Shinra, or his engineering stack.",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D1017] hover:bg-[#141A28] border border-[#202532] hover:border-[#6D7CFF]/60 text-xs font-mono text-[#F5F7FB] shadow-2xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(109,124,255,0.25)] cursor-pointer"
          aria-label="Open Gaurav's AI Assistant"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6D7CFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6D7CFF]"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#6D7CFF] group-hover:rotate-12 transition-transform" />
          <span className="font-semibold tracking-wide">Ask Gaurav&apos;s AI</span>
        </button>
      )}

      {/* Assistant Dialog Window */}
      {isOpen && (
        <div
          className="w-[90vw] sm:w-[380px] max-h-[560px] h-[520px] bg-[#0D1017] border border-[#202532] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="Ask Gaurav's AI Dialog"
        >
          {/* Header */}
          <div className="p-3.5 px-4 bg-[#08090D] border-b border-[#202532] flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F5F7FB]">
              <Sparkles className="w-3.5 h-3.5 text-[#6D7CFF]" />
              <span className="font-semibold">✦ Ask Gaurav&apos;s AI</span>
              <span className="text-[10px] text-[#555E70] hidden sm:inline">• Grounded</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                className="p-1 rounded text-[#8992A4] hover:text-[#F5F7FB] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-[#8992A4] hover:text-[#F5F7FB] transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Preset Questions Bar */}
          <div className="px-3 py-2 bg-[#0A0D14] border-b border-[#202532]/70 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-1.5">
            {PRESET_PROMPTS.map((prompt) => (
              <button
                key={prompt.label}
                type="button"
                onClick={() => handleSend(prompt.query)}
                className="px-2.5 py-1 rounded bg-[#141A28] hover:bg-[#1E2538] border border-[#202532] text-[10px] font-mono text-[#8992A4] hover:text-[#F5F7FB] transition-colors cursor-pointer"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "assistant" && (
                  <div className="w-5 h-5 rounded bg-[#161B26] border border-[#202532] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-[#6D7CFF]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3 rounded-lg leading-relaxed whitespace-pre-wrap ${
                    m.sender === "user"
                      ? "bg-[#6D7CFF] text-[#08090D] font-medium"
                      : "bg-[#08090D] border border-[#202532] text-[#F5F7FB]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-[#8992A4] font-mono text-[11px]">
                <div className="w-5 h-5 rounded bg-[#161B26] border border-[#202532] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-2.5 h-2.5 text-[#6D7CFF]" />
                </div>
                <span className="animate-pulse">Retrieving portfolio knowledge...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#08090D] border-t border-[#202532]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Gaurav's work..."
                className="flex-1 bg-[#0D1017] border border-[#202532] focus:border-[#6D7CFF] rounded-md px-3 py-2 text-xs font-mono text-[#F5F7FB] placeholder:text-[#555E70] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-3 py-2 rounded-md bg-[#161B26] hover:bg-[#6D7CFF] hover:text-[#08090D] text-[#F5F7FB] border border-[#202532] text-xs font-mono disabled:opacity-40 disabled:hover:bg-[#161B26] disabled:hover:text-[#F5F7FB] transition-all cursor-pointer"
              >
                Ask
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
