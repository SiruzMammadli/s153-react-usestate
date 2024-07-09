const flexStyles = ({ alignItems, justifyContent, ...props }) => ({
  display: props.inline ? "inline-flex" : "flex",
  alignItems,
  justifyContent,
  columnGap: props.columnGap ? `${props.columnGap}px` : undefined,
  rowGap: props.rowGap ? `${props.rowGap}px` : undefined,
  gap: props.gap ? `${props.gap}px` : undefined,
});

export default function Flex({
  inline,
  alignItems = "center",
  justifyContent,
  columnGap,
  rowGap,
  gap,
  ...props
}) {
  const Element = props.as ?? "div";

  return (
    <Element
      style={Object.assign(
        flexStyles({ alignItems, justifyContent, columnGap, rowGap, gap }),
        props.style
      )}
      className={props.className}
    >
      {props.children}
    </Element>
  );
}
