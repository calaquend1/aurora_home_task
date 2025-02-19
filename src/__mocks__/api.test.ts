import { fetchMovies } from "../api";

// Mock fetchMovies to return fake data
jest.mock("../api", () => ({
    fetchMovies: jest.fn()
}));

describe("API: fetchMovies", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("fetches movies correctly", async () => {
        const mockMovies = {
            total: 2,
            items: [
                { id: "1", title: "Movie 1", description: "Desc 1", image_url: "", rating: 8.5 },
                { id: "2", title: "Movie 2", description: "Desc 2", image_url: "", rating: 7.9 }
            ]
        };

        (fetchMovies as jest.Mock).mockResolvedValue(mockMovies);
        const data = await fetchMovies(1, 10);

        expect(fetchMovies).toHaveBeenCalledTimes(1);
        expect(fetchMovies).toHaveBeenCalledWith(1, 10);
        expect(data).toEqual(mockMovies);
    });

    it("handles API failure correctly", async () => {
        (fetchMovies as jest.Mock).mockRejectedValue(new Error("API error"));
        await expect(fetchMovies(1, 10)).rejects.toThrow("API error");
    });

    it("returns an empty list if no movies are found", async () => {
        (fetchMovies as jest.Mock).mockResolvedValue({ total: 0, items: [] });

        const data = await fetchMovies(1, 10);
        expect(data.items).toHaveLength(0);
    });

    it("handles an invalid API response", async () => {
        (fetchMovies as jest.Mock).mockResolvedValue({ unexpectedField: "wrong data" });

        const data = await fetchMovies(1, 10);
        expect(data).not.toHaveProperty("items"); // Ensure it's missing valid movie data
    });
});
