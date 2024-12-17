import { describe, it, expect } from "@jest/globals"; 
import { TwitService } from "./twit.service";

describe("TwitService", () => {
    it("should create a new twit", async () => {
        const twitService = new TwitService();
        const twit = await twitService.create({
            text: "Hello, world",
        });

        expect(twit).toHaveProperty("id");
        expect(twit.text).toEqual("Hello, world");
    });
});
