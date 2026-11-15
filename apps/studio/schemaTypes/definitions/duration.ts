import { CalendarRange } from "lucide-react";
import { defineField, defineType } from "sanity";

import { DurationInput } from "@/components/duration-input";
import { MonthYearInput } from "@/components/month-year-input";

export const duration = defineType({
  name: "duration",
  type: "object",
  title: "Duration",
  icon: CalendarRange,
  description: "Pick a month and year. Leave the end empty if it's ongoing.",
  components: { input: DurationInput },
  fields: [
    defineField({
      name: "start",
      type: "date",
      title: "Start",
      components: { input: MonthYearInput },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "end",
      type: "date",
      title: "End",
      components: { input: MonthYearInput },
      validation: (rule) =>
        rule.custom((end, context) => {
          const start = (context.parent as { start?: string } | undefined)
            ?.start;
          return end && start && end < start
            ? "End must be after the start"
            : true;
        }),
    }),
  ],
});
