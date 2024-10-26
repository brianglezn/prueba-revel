import { NextResponse } from 'next/server';

export async function GET() {
    // Eliminar la cookie de sesión
    const response = NextResponse.json({ success: true });

    // Cambiar el método de eliminación de la cookie sin usar el objeto de opciones
    response.cookies.delete('token');  // Solo se necesita pasar el nombre de la cookie

    return response;
}
