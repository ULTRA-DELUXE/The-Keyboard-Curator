import { NextRequest } from 'next/server'
import cloudinary from '@/lib/cloudinary'
import { apiError, apiSuccess } from '@/lib/api-response'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) return apiError('No file provided', 400)

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'company-profile' }, (err, res) => {
          if (err) reject(err)
          else resolve(res)
        })
        .end(buffer)
    })

    return apiSuccess(result)
  } catch {
    return apiError('Upload failed', 500)
  }
}