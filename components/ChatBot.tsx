"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"

interface ChatbotProps {
  onClose: () => void
}

export function Chatbot({ onClose }: ChatbotProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-80 h-auto flex flex-col bg-gray-800 border-green-500">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-green-500">
          <span>Chat con IA</span>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Cerrar chat">
            <X className="h-4 w-4 text-green-500" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-60 w-full pr-4">
          {messages.map((m) => (
            <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${
                  m.role === "user" ? "bg-green-500 text-white" : "bg-gray-700 text-gray-100"
                }`}
              >
                {m.content}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe un mensaje..."
            className="flex-grow bg-gray-700 text-gray-100 border-green-500"
          />
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            Enviar
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

