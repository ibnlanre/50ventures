import { ActionIcon, Button, clsx, Popover, Stack } from "@mantine/core";
import { useHash } from "@mantine/hooks";
import { CloseSquare, HambergerMenu, Receive, Transmit } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./navItems";

export function Mobile({ hash }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Popover
      radius="md"
      transition="pop-top-right"
      opened={menuOpen}
      onClose={() => setMenuOpen(false)}
      position="bottom-end"
    >
      <Popover.Target>
        <ActionIcon className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <Transmit /> : <Receive />}
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown
        sx={{
          backgroundColor: "white",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          width: "min(75vw,250px)",
        }}
      >
        <Stack align="flex-start">
          {navItems.map(({ title, id }, idx) => (
            <Link key={idx} href={"#" + id} passHref>
              <Button
                className={clsx(
                  "bg-transparent px-0",
                  hash.match(id) ? "text-accent-70" : "text-accent-50"
                )}
                variant="white"
                component="a"
              >
                {title}
              </Button>
            </Link>
          ))}
          <Button className="text-white stripe">Contact Us</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
