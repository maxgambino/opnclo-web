import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename
    const filePath = join(process.cwd(), 'public', filename)
    
    const fileBuffer = await readFile(filePath)
    
    // Déterminer le type MIME basé sur l'extension
    const contentType = filename.endsWith('.png') 
      ? 'image/png' 
      : filename.endsWith('.jpg') || filename.endsWith('.jpeg')
      ? 'image/jpeg'
      : filename.endsWith('.webp')
      ? 'image/webp'
      : 'application/octet-stream'
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving image:', error)
    return new NextResponse('Image not found', { status: 404 })
  }
}

