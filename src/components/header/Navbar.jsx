import Box from "../Box";

const navListItems = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "About",
  },
  {
    id: 3,
    label: "Shop",
  },
];

const styles = {
  label: {
    padding: 8,
    cursor: "pointer",
    color: "rgb(0 0 0 / 55%)",
  },
};

export default function Navbar() {
  return (
    <nav>
      <Box>
        {navListItems.map((item) => (
          <div
            key={item.id}
            style={item.id === 1 ? {...styles.label, color: 'black'} : styles.label}
          >
            {item.label}
          </div>
        ))}
      </Box>
    </nav>
  );
}
