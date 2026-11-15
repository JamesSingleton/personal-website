import { careerListToMarkdown } from "./markdown";

test("careerListToMarkdown lists roles with dates and the resume link", () => {
  const result = careerListToMarkdown(
    {
      title: "Work",
      roles: [
        {
          _id: "a",
          title: "Software Developer",
          startDate: "2017-04-01",
          endDate: "2018-09-01",
          organization: { name: "Internet Brands" },
        },
      ],
      resumeUrl: "https://cdn.sanity.io/files/x/y/resume.pdf",
    } as never,
    {}
  );
  expect(result).toContain("## Work");
  expect(result).toContain(
    "Software Developer, Internet Brands (Apr 2017 – Sep 2018)"
  );
  expect(result).toContain(
    "[Download resume](https://cdn.sanity.io/files/x/y/resume.pdf)"
  );
  expect(result).not.toMatch(/</);
});
