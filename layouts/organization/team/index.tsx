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

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

const images: Array<
  {
    name: string;
    title: string;
    objectPosition: CSSProperties["objectPosition"];
    objectFit: CSSProperties["objectFit"];
    handle: string;
  } & StaticImageData
> = [
  {
    ...JendayiFrazer,
    name: "Dr. Jendayi E. Frazer",
    title: "50 Ventures Partner & CEO",
    objectPosition: "20% 80%",
    objectFit: "cover",
    handle: null,
  },
  {
    ...TimothyShortley,
    name: "Timothy Shortley",
    title: "50 Ventures Partner & COO",
    objectPosition: "0 0",
    objectFit: "cover",
    handle: null,
  },
  {
    ...AyodejiBalogun,
    name: "Ayodeji Balogun",
    title: "Business Development & Investments Director",
    objectPosition: "0 0",
    objectFit: "cover",
    handle: "https://ng.linkedin.com/in/ayodejiobalogun",
  },
  {
    ...RamonaDurham,
    name: "Ramona Durham",
    title: "Marketing and Communications",
    objectPosition: "0 0",
    objectFit: "contain",
    handle: null,
  },
  {
    ...SheilaKaaya,
    name: "Sheila Kaaya",
    title: "Client Liaison and Support",
    objectPosition: "0 0",
    objectFit: "cover",
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
          Benefit from the combined experience of our team of professionals
          working to deliver results for businesses and projects that matter.
        </Spoiler>

        <article className="flex flex-wrap justify-center gap-10">
          {images.map(
            (
              {
                name,
                title,
                objectPosition,
                blurDataURL,
                objectFit,
                handle,
                src,
              },
              idx
            ) => {
              return (
                <section
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 200}
                  className="relative flex-1 mx-auto lg:mx-0 sm:max-w-[45%] lg:max-w-[5%] min-w-[min(100%,330px)]"
                >
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%)",
                    }}
                    className="absolute top-0 grid w-full h-full rounded-t-full"
                  >
                    <div className="p-1 m-1 bg-white rounded-t-full"></div>
                  </div>

                  <div className="relative m-1 h-0 pb-[100%]">
                    <Image
                      fill
                      src={src}
                      alt={title}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      style={{
                        objectPosition,
                        objectFit,
                      }}
                      className="rounded-t-full "
                    />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 m-1 text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(116.82deg, rgba(0, 45, 98, 0.5) 0%, rgba(0, 45, 98, 0.07) 100%)",
                      backdropFilter: "blur(39.1496px)",
                    }}
                  >
                    <Group position="apart">
                      <Title className="text-lg">{name}</Title>

                      {handle && (
                        <Link target="_blank" href={handle}>
                          <ActionIcon className="text-white bg-transparent hover:text-black">
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
                    <Text>{title}</Text>
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
