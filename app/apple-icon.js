import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
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
            background: 'linear-gradient(135deg, #080808 0%, #161616 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(255,255,255,0.1)',
          }}
        >
          <img
            src={`data:image/png;base64,${Buffer.from(logoBuffer).toString('base64')}`}
            width={120}
            height={120}
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
            fontSize: 72,
            background: 'linear-gradient(135deg, #080808 0%, #161616 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 700,
            borderRadius: '32px',
            border: '2px solid rgba(255,255,255,0.1)',
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