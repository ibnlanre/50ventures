import { Logo } from "@/svg";
import { Button, Group } from "@mantine/core";
import { useHash } from "@mantine/hooks";
import { useEffect } from "react";

import Link from "next/link";

const navItems: Array<{
  title: string;
  id: string;
}> = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "Leadership",
    id: "leadership",
  },
  {
    title: "About",
    id: "about",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Partners",
    id: "partners",
  },
];

export function NavBar() {
  const [hash, setHash] = useHash();

  useEffect(() => {
    setHash(window.location.hash);
  });

  return (
    <Group
      py="lg"
      className="max-w-screen-xl px-5 mx-auto sm:px-20"
      position="apart"
    >
      <Logo />
      <Group>
        <Group>
          {navItems.map(({ title, id }, idx) => (
            <Link key={idx} href={"#" + id} passHref>
              <Button
                className={hash.match(id) ? "text-accent-70" : "text-accent-50"}
                variant="white"
                component="a"
              >
                {title}
              </Button>
            </Link>
          ))}
        </Group>
        <Button className="text-white stripe">Contact Us</Button>
      </Group>
    </Group>
  );
}
