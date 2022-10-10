import {
  ActionIcon,
  clsx,
  Group,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import JendayiFrazer from "./assets/jendayi_frazer.png";
import TimothyShortley from "./assets/timothy_shortley.jpeg";
import AyodejiBalogun from "./assets/ayodeji_balogun.jpeg";
import RamonaDurham from "./assets/ramona_durham.png";
import SheilaKaaya from "./assets/sheila_kaaya.png";
import { css } from "@emotion/css";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

const images = [
  {
    ...JendayiFrazer,
    name: "Dr. Jendayi E. Frazer",
    title: "50 Ventures Partner & CEO",
    backgroundPositionX: "20%",
    backgroundPositionY: "80%",
    backgroundSize: "cover",
    handle: null,
  },
  {
    ...TimothyShortley,
    name: "Timothy Shortley",
    title: "50 Ventures Partner & COO",
    backgroundPositionX: "0",
    backgroundPositionY: "0",
    backgroundSize: "cover",
    handle: null,
  },
  {
    ...AyodejiBalogun,
    name: "Ayodeji Balogun",
    title: "Business Development & Investments Director",
    backgroundPositionX: "0",
    backgroundPositionY: "0",
    backgroundSize: "cover",
    handle: "https://ng.linkedin.com/in/ayodejiobalogun",
  },
  {
    ...RamonaDurham,
    name: "Ramona Durham",
    title: "Marketing and Communications",
    backgroundPositionX: "0",
    backgroundPositionY: "0",
    backgroundSize: "contain",
    handle: null,
  },
  {
    ...SheilaKaaya,
    name: "Sheila Kaaya",
    title: "Client Liaison and Support",
    backgroundPositionX: "0",
    backgroundPositionY: "0",
    backgroundSize: "cover",
    handle: null,
  },
];

export function Team() {
  return (
    <div
      id="team"
      className={clsx(
        "grid items-center",
        "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
        "clump:sm:gap-[clamp(1rem,7vw,7rem)] gap-8 sm:gap-28"
      )}
    >
      <Stack spacing="xl">
        <Title className="text-3xl font-clash" order={2} weight={700}>
          MEET THE TEAM
        </Title>
        <Spoiler
          maxHeight={320}
          hideLabel="Hide"
          showLabel="View More"
          classNames={{
            root: "leading-[40px] text-accent-40 text-lg",
            control: "underline text-accent-70",
            content: "duration-500",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
          lorem fusce mauris fermentum congue sit maecenas. Fermentum eget elit
          ullamcorper congue quis nulla sit. Amet mauris tristique placerat
          commodo. Tristique vitae at massa porta eleifend sagittis consectetur
          vel. Interdum egestas enim dignissim ultrices cursus sem amet sit.
          Suspendisse volutpat sit et aenean auctor. Imperdiet.
        </Spoiler>

        <article
          className={clsx(
            "grid gap-10",
            "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]"
          )}
        >
          {images.map(
            ({
              name,
              title,
              backgroundPositionX,
              backgroundPositionY,
              backgroundSize,
              handle,
              src,
            }) => {
              return (
                <section className="relative">
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%)",
                    }}
                    className="absolute top-0 grid w-full h-full rounded-t-full"
                  >
                    <div className="p-1 m-1 bg-white rounded-t-full"></div>
                  </div>
                  <div className="relative p-1">
                    <div
                      style={{
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX,
                        backgroundPositionY,
                        backgroundSize,
                      }}
                      className="h-0 pb-[100%] rounded-t-full"
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 p-8 m-1 text-white"
                        style={{
                          backgroundImage:
                            "linear-gradient(116.82deg, rgba(0, 45, 98, 0.5) 0%, rgba(0, 45, 98, 0.07) 100%)",
                          backdropFilter: "blur(39.1496px)",
                        }}
                      >
                        <Group position="apart">
                          <Title className="text-lg">{name}</Title>
                          {handle && (
                            <Link href={handle} passHref>
                              <ActionIcon
                                component="a"
                                className="bg-transparent"
                                target="_blank"
                              >
                                <svg width="32" height="32" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="m11.93 5l2.83 2.83L5 17.59L6.42 19l9.76-9.75L19 12.07V5h-7.07Z"
                                  />
                                </svg>
                              </ActionIcon>
                            </Link>
                          )}
                        </Group>
                        <Text className="text-xs">{title}</Text>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }
          )}
        </article>
      </Stack>
    </div>
  );
}
