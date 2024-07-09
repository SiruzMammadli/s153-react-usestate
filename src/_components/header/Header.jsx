import styles from "./header.module.css";
import Flex from "../Flex";
import IconButton from "../buttons/IconButton";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FiBell } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className={styles.header}>
      <Flex justifyContent={"space-between"}>
        <Flex>
          <IconButton>
            <HiBars3 />
          </IconButton>
          <Link to="/">SB Admin Pro</Link>
        </Flex>
        <Flex>
          <IconButton>
            <FiBell />
          </IconButton>
          <IconButton>
            <IoMailOutline />
          </IconButton>
        </Flex>
      </Flex>
    </header>
  );
}
