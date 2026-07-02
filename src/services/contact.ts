export interface ContactPayload {
  name: string
  email: string
  message: string
  subject: string
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('errors.web3formsKey')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      message: payload.message,
      subject: payload.subject,
    }),
  })

  const data = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? 'errors.sendFailed')
  }
}
