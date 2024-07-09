import Flex from "../Flex";
import IconButton from "../buttons/IconButton";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FiBell } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import AvatarButton from "../buttons/AvatarButton";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header className={'h-[58px] py-2 border-b border-[#ddd]'}>
      <Flex justifyContent={"space-between"} className={'h-full'} gap={64}>
        <Flex>
          <IconButton className="ml-2">
            <HiBars3 />
          </IconButton>
          <Link to="/" className="font-[600] text-[#363d47] p-[5px_16px_5px_8px]">SB Admin Pro</Link>
        </Flex>
        <div className="grow">
          <HeaderSearch/>
        </div>
        <Flex className='mr-6' gap={16}>
          <IconButton>
            <FiBell />
          </IconButton>
          <IconButton>
            <IoMailOutline />
          </IconButton>
          <AvatarButton/>
        </Flex>
      </Flex>
    </header>
  );
}
