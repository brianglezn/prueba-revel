import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { movieId } = await req.json();

    const res = await fetch('https://kata.conducerevel.com/films/user/list/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId }),
    });

    const data = await res.json();
    return NextResponse.json(data);
}
