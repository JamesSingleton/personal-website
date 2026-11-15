import { Flex, Select } from "@sanity/ui";
import { useState } from "react";
import { type StringInputProps, set, unset } from "sanity";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear + 2 - 1990 }, (_, i) =>
  String(currentYear + 1 - i)
);

function parse(value: string | undefined) {
  const [year = "", month = ""] = value?.split("-") ?? [];
  return { year, month };
}

export function MonthYearInput(props: StringInputProps) {
  const { value, onChange, readOnly, elementProps } = props;
  const [draft, setDraft] = useState(() => parse(value));
  const current = value ? parse(value) : draft;

  function update(next: { year: string; month: string }) {
    setDraft(next);
    if (next.year && next.month) {
      onChange(set(`${next.year}-${next.month}-01`));
    } else if (!next.year && !next.month) {
      onChange(unset());
    }
  }

  return (
    <Flex gap={2}>
      <Select
        {...elementProps}
        aria-label="Month"
        readOnly={readOnly}
        value={current.month}
        onChange={(event) =>
          update({ ...current, month: event.currentTarget.value })
        }
      >
        <option value="">Month</option>
        {months.map((name, index) => {
          const month = String(index + 1).padStart(2, "0");
          return (
            <option key={month} value={month}>
              {name}
            </option>
          );
        })}
      </Select>
      <Select
        aria-label="Year"
        readOnly={readOnly}
        value={current.year}
        onChange={(event) =>
          update({ ...current, year: event.currentTarget.value })
        }
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
