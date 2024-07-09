import Flex from "../Flex";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { mergePseudoCls } from "../../providers/utils";
import { useState } from "react";

export default function HeaderSearch() {
    const [hasInputLength, setHasInputLength] = useState(false);
  return (
    // <Flex className='bg-[#eef2f8] w-max [&>*]:p-2'>
    <Flex className="bg-blue-300 w-max rounded-lg overflow-hidden relative">
      <input
        className="outline-none bg-transparent h-[44px] px-4 placeholder:text-gray-700"
        placeholder="Search"
        onChange={e => setHasInputLength(Boolean(e.target.value))}
      />
      {
        hasInputLength && <div className={`${mergePseudoCls('[&>svg]', ['w-5', 'h-5', 'cursor-pointer'])} absolute top-1/2 -translate-y-1/2 right-[46px]`}><IoIosClose/></div>
      }
      <Flex
        as="button"
        inline
        justifyContent="center"
        className="w-[44px] h-[44px]"
      >
        <CiSearch />
      </Flex>
    </Flex>
  );
}
