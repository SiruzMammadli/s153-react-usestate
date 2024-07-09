import Flex from "../Flex";

export default function IconButton(props) {
  return (
    <Flex as="button" inline justifyContent="center">
      {props.children}
    </Flex>
  );
}
