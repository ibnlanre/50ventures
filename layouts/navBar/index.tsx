import { Logo } from "@/components";
import { Button, clsx, Group } from "@mantine/core";
import { useHash } from "@mantine/hooks";
import { useEffect } from "react";
import { navItems } from "./navItems";
import { Mobile } from "./mobile";

import Link from "next/link";

export function NavBar() {
  const [hash, setHash] = useHash();

  useEffect(() => {
    setHash(window.location.hash);
  });

  return (
    <Group
      py="lg"
      className={clsx(
        "max-w-screen-xl mx-auto w-full left-0 right-0 top-0 z-50",
        "clump:sm:px-[clamp(5px,5vw,5rem)] px-4 sm:px-20 fixed min-h-[75px]"
      )}
      style={{
        background:
          "linear-gradient(116.82deg, rgba(253, 250, 244, 0.07) 0%, rgba(240, 245, 251, 0.02) 100%)",
        backdropFilter: "blur(10px)",
      }}
      position="apart"
    >
      <Link href="/">
        <Logo />
      </Link>

      <Mobile hash={hash} />

      <Group className="hidden ml-auto gap-7 md:flex">
        <Group className="gap-6 overflow-hidden">
          {navItems.map(({ title, id }, idx) => (
            <Link
              key={idx}
              href={{
                pathname: "/",
                hash: id,
              }}
            >
              <Button
                className={clsx(
                  "bg-transparent px-0",
                  hash.match(id) ? "text-accent-70" : "text-accent-50"
                )}
                variant="white"
              >
                {title}
              </Button>
            </Link>
          ))}
        </Group>

        <Link href="/contact-us">
          <Button className="text-white stripe">Contact Us</Button>
        </Link>
      </Group>
    </Group>
  );
}
