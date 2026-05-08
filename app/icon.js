import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  // Use relative URL that works in both dev and production
  const logoUrl = new URL('/logo.png', process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  
  try {
    const logoResponse = await fetch(logoUrl)
    const logoBuffer = await logoResponse.arrayBuffer()

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
          }}
        >
          <img
            src={`data:image/png;base64,${Buffer.from(logoBuffer).toString('base64')}`}
            width={28}
            height={28}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    // Fallback to text logo if image fails to load
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 18,
            background: '#ffffff',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000',
            fontWeight: 700,
            borderRadius: '6px',
          }}
        >
          OK
        </div>
      ),
      {
        ...size,
      }
    )
  }
}