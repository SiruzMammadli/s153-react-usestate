const boxStyle = (props) => ({
  display: "flex",
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  gap: props.gap
});

export default function Box({ alignItems = 'center', justifyContent, gap, ...props }) {
  return (
    <div style={boxStyle({ alignItems, justifyContent, gap })}>{props.children}</div>
  );
}
