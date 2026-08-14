import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

/** Append f_auto,q_auto for format/quality optimization on delivery URLs. */
export function optimizeCloudinaryUrl(url: string): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) {
    return url
  }

  if (url.includes('f_auto') || url.includes('q_auto')) {
    return url
  }

  return url.replace('/upload/', '/upload/f_auto,q_auto/')
}

export default cloudinary