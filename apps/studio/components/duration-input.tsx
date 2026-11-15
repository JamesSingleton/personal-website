import { ArrowRightIcon } from "@sanity/icons/ArrowRight";
import { Box, Flex, Text } from "@sanity/ui";
import { useCallback, useMemo } from "react";
import {
  type FieldMember,
  MemberField,
  type ObjectInputProps,
  type RenderFieldCallback,
} from "sanity";

export function DurationInput(props: ObjectInputProps) {
  const { members, renderInput, renderItem, renderPreview } = props;

  const fieldMembers = members.filter(
    (member): member is FieldMember => member.kind === "field"
  );
  const start = fieldMembers.find((member) => member.name === "start");
  const end = fieldMembers.find((member) => member.name === "end");

  // Render the bare inputs so start and end sit side by side without field chrome.
  const renderField: RenderFieldCallback = useCallback(
    (field) => field.children,
    []
  );
  const renderProps = useMemo(
    () => ({ renderField, renderInput, renderItem, renderPreview }),
    [renderField, renderInput, renderItem, renderPreview]
  );

  return (
    <Flex align="center" gap={3}>
      <Box flex={1}>
        {start ? <MemberField {...renderProps} member={start} /> : null}
      </Box>
      <Text muted>
        <ArrowRightIcon />
      </Text>
      <Box flex={1}>
        {end ? <MemberField {...renderProps} member={end} /> : null}
      </Box>
    </Flex>
  );
}
