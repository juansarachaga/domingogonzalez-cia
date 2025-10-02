// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const password = process.env.SITE_PASSWORD
  const cookie = req.cookies.get('site-auth')?.value

  // Si la cookie ya está guardada con la clave correcta → dejar pasar
  if (cookie === password) {
    return NextResponse.next()
  }

  // Si en la URL viene ?password=CLAVE → setear cookie y dejar pasar
  if (req.nextUrl.searchParams.get('password') === password) {
    const res = NextResponse.next()
    res.cookies.set('site-auth', password, { httpOnly: true })
    return res
  }

  // Si no tiene acceso → mostrar pantalla básica
  return new NextResponse(
    `<html><body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
      <div style="text-align:center">
        <h2>Acceso restringido</h2>
        <p>Para ingresar usá la URL con el parámetro <code>?password=TUCLAVE</code></p>
      </div>
    </body></html>`,
    { status: 401, headers: { 'Content-Type': 'text/html' } }
  )
}

// 🔑 Asegura que el middleware se ejecute en páginas pero no bloquee assets ni robots.txt
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt).*)'],
}
