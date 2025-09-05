// middleware.ts (at the repo root)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = { matcher: ['/api/:path*'] }

export default function middleware(req: NextRequest) {
  // Allow preflight
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204 })
  }

  const token = req.headers.get('x-bot-token')
  if (!token || token !== process.env.BOT_API_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.next()
}
