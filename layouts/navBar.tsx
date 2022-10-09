import { Logo } from "@/svg";
import { Button, clsx, Group } from "@mantine/core";
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
      className="sticky top-0 z-10 max-w-screen-xl px-5 mx-auto sm:px-20"
      style={{
        background:
          "linear-gradient(116.82deg, rgba(253, 250, 244, 0.07) 0%, rgba(240, 245, 251, 0.02) 100%)",
        backdropFilter: "blur(10px)",
      }}
      position="apart"
    >
      <Logo />
      <Group>
        <Group>
          {navItems.map(({ title, id }, idx) => (
            <Link key={idx} href={"#" + id} passHref>
              <Button
                className={clsx(
                  "bg-transparent",
                  hash.match(id)
                    ? "text-accent-70"
                    : "text-accent-50"
                )}
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
