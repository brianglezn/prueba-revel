const BASE_URL = '/api';

// Auth
export async function login(email: string, password: string) {
    const response = await fetch(`${BASE_URL}/auth/sign-in/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
}

export async function logout() {
    const response = await fetch(`${BASE_URL}/auth/sign-out`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to log out');
    }

    localStorage.removeItem('token');
    return response.ok;
}

// Movies

export async function getMovies() {
    const response = await fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data;
}

export async function getMovieById(id: string) {
    const response = await fetch(`${BASE_URL}/movies/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movie with ID ${id}`);
    }

    const data = await response.json();
    return data;
}

// Movies genres

export async function getGenres() {
    const response = await fetch(`${BASE_URL}/genres`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch genres');
    }

    const data = await response.json();
    return data;
}

export async function getGenreById(id: string) {
    const response = await fetch(`${BASE_URL}/genres/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch genre with ID ${id}`);
    }

    const data = await response.json();
    return data;
}

export async function getMoviesByGenre(id: string) {
    const response = await fetch(`${BASE_URL}/genres/${id}/movies`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies for genre with ID ${id}`);
    }

    const data = await response.json();
    return data;
}

// User fav

export async function addToFavorites(movieId: string) {
    const response = await fetch(`${BASE_URL}/user/list/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ movieId }),
    });

    if (!response.ok) {
        throw new Error('Failed to add movie to favorites');
    }

    const data = await response.json();
    return data;
}

export async function removeFromFavorites(movieId: string) {
    const response = await fetch(`${BASE_URL}/user/list/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to remove movie from favorites');
    }

    const data = await response.json();
    return data;
}

// User 

export async function getUser() {
    const response = await fetch(`${BASE_URL}/user`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return data;
}

