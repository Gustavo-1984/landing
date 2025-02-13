"use server"

import { botSchema, SuccessSchema } from "../src/schemas"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function bot(prevState: ActionStateType, formData: FormData) {

    const message = formData.get("message")

    const validation = botSchema.safeParse({ message })

    if (!validation.success) {
        const errors = validation.error.errors.map((error) => error.message)
        return {
            errors,
            success: prevState.success
        }
    }
  

  const url = `${process.env.N8N_URL}/webhook/ask-agent`
  
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ message: validation.data.message }),
  })

 

  const data = await response.text()
  const parsedData = JSON.parse(data) // Suponiendo que sea un array
  const plainText = parsedData[0]?.output || ""

  const success = SuccessSchema.parse(plainText)


  return {
    errors: prevState.errors,
    success
  }
}
