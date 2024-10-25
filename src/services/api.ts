import axios, { AxiosError } from 'axios';

interface ErrorResponse {
    message?: string;
}

const handleError = (error: AxiosError<ErrorResponse>) => {
    if (error.response) {
        const errorMessage = error.response.data?.message || 'Error en la solicitud';
        console.error(`Error: ${error.response.status} - ${errorMessage}`);
    } else if (error.request) {
        console.error('Error: No se recibió respuesta del servidor');
    } else {
        console.error('Error: ', error.message);
    }
    throw new Error(error.message || 'Error en la solicitud');
};

// Auth
export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post('/api/films/auth/sign-in', { email, password });
        console.log('Inicio de sesión exitoso');
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

export const logout = async () => {
    try {
        const response = await axios.get('/api/films/auth/sign-out');
        console.log('Cierre de sesión exitoso');
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

// Movies
export const getMovies = async () => {
    try {
        const response = await axios.get('/api/films/movies');
        console.log('Películas obtenidas correctamente');
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

export const getMovieById = async (id: string) => {
    try {
        const response = await axios.get(`/api/films/movies/${id}`);
        console.log(`Película con ID: ${id} obtenida correctamente`);
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

// Movies genres
export const getGenres = async () => {
    try {
        const response = await axios.get('/api/films/genres');
        console.log('Géneros obtenidos correctamente');
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

export const getGenreById = async (id: string) => {
    try {
        const response = await axios.get(`/api/films/genres/${id}`);
        console.log(`Género con ID: ${id} obtenido correctamente`);
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

export const getMoviesByGenre = async (id: string) => {
    try {
        const response = await axios.get(`/api/films/genres/${id}/movies`);
        console.log(`Películas del género con ID: ${id} obtenidas correctamente`);
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

// User 
export const getUserDetails = async () => {
    try {
        const response = await axios.get('/api/films/user');
        console.log('Detalles del usuario obtenidos correctamente');
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

// User list
export const addMovieToUserList = async (id: string) => {
    try {
        const response = await axios.post('/api/films/user/list/', { id });
        console.log(`Película con ID: ${id} añadida a la lista de usuario correctamente`);
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};

export const removeMovieFromUserList = async (id: string) => {
    try {
        const response = await axios.delete(`/api/films/user/list/${id}`);
        console.log(`Película con ID: ${id} eliminada de la lista de usuario correctamente`);
        return response.data;
    } catch (error) {
        handleError(error as AxiosError<ErrorResponse>);
    }
};
