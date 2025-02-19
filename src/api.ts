import axios from "axios";

export const API_BASE_URL = "https://november7-730026606190.europe-west1.run.app";

// Define the Movie type
export interface Movie {
  id: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
  watched?: boolean;
}

// Define API response structure
export interface PaginatedMovies {
  total: number;
  items: Movie[];
}

// Fetch movies from API
export const fetchMovies = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedMovies> => {
  try {
    const response = await axios.get<PaginatedMovies>(`${API_BASE_URL}/movies/`, {
      params: { skip: (page - 1) * limit, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
