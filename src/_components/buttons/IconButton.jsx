import { mergeCls } from "../../providers/utils";
import Flex from "../Flex";

export default function IconButton({className, onClick, ...props}) {
  return (
    <Flex
      as="button"
      inline
      justifyContent="center"
      className={mergeCls(
        'text-[rgb(33_40_50_/_50%)] h-[44px] w-[44px] rounded-full duration-250 transition-colors',
        'hover:bg-[rgb(33_40_50_/_10%)]',
        className
      )}
      onClick={onClick}
    >
      {props.children}
    </Flex>
  );
}
