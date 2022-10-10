import { ActionIcon, Button, clsx, Popover, Stack } from "@mantine/core";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { navItems } from "./navItems";

import Link from "next/link";

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
        <ActionIcon
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="1em" height="1em" viewBox="0 0 20 20">
              <path
                fill="currentColor"
                d="m3.219 2.154l6.778 6.773l6.706-6.705c.457-.407.93-.164 1.119.04a.777.777 0 0 1-.044 1.035l-6.707 6.704l6.707 6.702c.298.25.298.74.059 1.014c-.24.273-.68.431-1.095.107l-6.745-6.749l-6.753 6.752c-.296.265-.784.211-1.025-.052c-.242-.264-.334-.72-.025-1.042l6.729-6.732l-6.701-6.704c-.245-.27-.33-.764 0-1.075c.33-.311.822-.268.997-.068Z"
              ></path>
            </svg>
          ) : (
            <HambergerMenu />
          )}
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
            <Link
              key={idx}
              href={{
                pathname: "/",
                hash: id,
              }}
              passHref
            >
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
          
          <Link href="/contact-us" passHref>
            <Button component="a" className="text-white stripe">
              Contact Us
            </Button>
          </Link>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
