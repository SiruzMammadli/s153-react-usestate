const flexStyles = ({ alignItems, justifyContent, ...props }) => ({
  display: props.inline ? "inline-flex" : "flex",
  alignItems,
  justifyContent,
  gap: props.gap ? `${props.gap}px` : undefined,
});

export default function Flex({
  inline,
  alignItems = "center",
  justifyContent,
  gap,
  style,
  onClick,
  ...props
}) {
  const Element = props.as ?? "div";

  return (
    <Element
      style={Object.assign(
        flexStyles({ alignItems, justifyContent, gap }),
        style
      )}
      className={props.className}
      onClick={onClick}
    >
      {props.children}
    </Element>
  );
}
