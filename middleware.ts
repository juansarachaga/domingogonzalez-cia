// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (process.env.REQUIRE_PASSWORD !== 'true') {
    return NextResponse.next()
  }

  const password = process.env.SITE_PASSWORD
  const cookie = req.cookies.get('site-auth')?.value

  if (cookie === password) return NextResponse.next()

  if (req.nextUrl.searchParams.get('password') === password) {
    const res = NextResponse.next()
    res.cookies.set('site-auth', password || '', { httpOnly: true })
    return res
  }

  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Acceso restringido</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #0070f3, #7928ca);
            padding: 1rem;
          }
          .card {
            background: #fff;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            text-align: center;
            width: 100%;
            max-width: 400px;
            animation: fadeIn 0.6s ease;
          }
          .card img {
            max-width: 180px;
            margin-bottom: 1.5rem;
          }
          h2 {
            margin-bottom: 1rem;
            color: #333;
          }
          input {
            padding: 0.9rem;
            width: 100%;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            box-sizing: border-box;
          }
          button {
            padding: 0.9rem;
            width: 100%;
            border: none;
            border-radius: 8px;
            background: #0070f3;
            color: #fff;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: background 0.3s ease;
          }
          button:hover {
            background: #005bb5;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      </head>
      <body>
        <div class="card">
          <img src="/img/juntandoPixels.jpg" alt="Juntando Pixel" />
          <h2>Acceso restringido</h2>
          <form method="GET" action="/">
            <input type="password" name="password" placeholder="Ingresá la clave" required />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </body>
    </html>`,
    { status: 401, headers: { 'Content-Type': 'text/html' } }
  )
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|img/).*)',
  ],
}
