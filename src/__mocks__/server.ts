import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { API_BASE_URL } from "../api";

export const handlers = [
    http.get(`${API_BASE_URL}/movies/`, async () => {
        return HttpResponse.json({
            total: 2,
            items: [
                { id: "1", title: "Movie 1", description: "Desc 1", poster: "", rating: 8.5 },
                { id: "2", title: "Movie 2", description: "Desc 2", poster: "", rating: 7.9 }
            ]
        });
    })
];

export const server = setupServer(...handlers);

// Start server before tests and close after
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
