import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'OmniKit - One SDK for every chain, every wallet'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080808',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #0f0f0f 0%, transparent 50%), radial-gradient(circle at 75% 75%, #161616 0%, transparent 50%)',
          position: 'relative',
        }}
      >
        {/* Background dots pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '0 60px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.13)',
              backgroundColor: '#0f0f0f',
              fontSize: '16px',
              color: '#6b6b6b',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#4ade80',
              }}
            />
            WatchUp LTD · Open Source · v0.1 Alpha
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              margin: '0 0 32px 0',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, #fff 40%, rgba(255,255,255,0.55) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            One SDK for every chain, every wallet
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '24px',
              color: '#6b6b6b',
              lineHeight: 1.6,
              margin: '0 0 48px 0',
              maxWidth: '800px',
            }}
          >
            OmniKit unifies wallet connection, authentication, and transaction handling across Ethereum and Solana. Stop writing the same code twice.
          </p>

          {/* Chain pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '16px',
              color: '#6b6b6b',
            }}
          >
            <span>Supports:</span>
            <div
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(74,222,128,0.25)',
                backgroundColor: 'rgba(74,222,128,0.12)',
                color: '#4ade80',
                fontSize: '14px',
              }}
            >
              Ethereum
            </div>
            <div
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(74,222,128,0.25)',
                backgroundColor: 'rgba(74,222,128,0.12)',
                color: '#4ade80',
                fontSize: '14px',
              }}
            >
              Solana
            </div>
            <div
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                backgroundColor: '#0f0f0f',
                color: '#6b6b6b',
                fontSize: '14px',
              }}
            >
              Base
            </div>
            <div
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                backgroundColor: '#0f0f0f',
                color: '#6b6b6b',
                fontSize: '14px',
              }}
            >
              Polygon
            </div>
          </div>
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '18px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            OK
          </div>
          OmniKit
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}