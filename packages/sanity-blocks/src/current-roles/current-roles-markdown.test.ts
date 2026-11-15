import { currentRolesToMarkdown } from "./markdown";

test("currentRolesToMarkdown lists roles without JSX", () => {
  const result = currentRolesToMarkdown({
    eyebrow: "01 Now",
    roles: [
      {
        _id: "a",
        title: "Senior Software Engineer",
        startDate: "2025-03-01",
        organization: { name: "American Express" },
      },
    ],
  } as never);
  expect(result).toContain("**01 Now**");
  expect(result).toContain("Senior Software Engineer at American Express");
  expect(result).not.toMatch(/</);
});

test("currentRolesToMarkdown is empty without roles", () => {
  expect(currentRolesToMarkdown({} as never)).toBe("");
});
