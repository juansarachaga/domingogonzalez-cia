// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // 🚨 Solo aplicar bloqueo en producción
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const password = process.env.SITE_PASSWORD
  const cookie = req.cookies.get('site-auth')?.value

  // Si ya tiene cookie con la clave correcta → dejar pasar
  if (cookie === password) {
    return NextResponse.next()
  }

  // Si en la URL viene ?password=CLAVE → setear cookie y dejar pasar
  if (req.nextUrl.searchParams.get('password') === password) {
    const res = NextResponse.next()
    res.cookies.set('site-auth', password || '', { httpOnly: true })
    return res
  }

  // Si no tiene acceso → mostrar formulario simple
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Acceso restringido</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f4f4f4;
            font-family: Arial, sans-serif;
          }
          .card {
            background: #fff;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
            width: 320px;
          }
          h2 {
            margin-bottom: 1rem;
          }
          input {
            padding: 0.5rem;
            width: 100%;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            padding: 0.6rem 1.2rem;
            border: none;
            border-radius: 5px;
            background: #0070f3;
            color: #fff;
            cursor: pointer;
            font-size: 1rem;
          }
          button:hover {
            background: #005bb5;
          }
        </style>
      </head>
      <body>
        <div class="card">
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

// ✅ El middleware solo se aplica a páginas, no a assets ni imágenes
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|img/).*)',
  ],
}
