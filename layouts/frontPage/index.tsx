import { Button, clsx, Group, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { css } from "@emotion/css";

import Image from "next/image";
import Link from "next/link";

import Abbott from "./assets/abbott.png";
import Skyscraper from "./assets/skyscraper.jpeg";
import AFDB from "./assets/afdb.png";
import BuffettFoundation from "./assets/buffett-foundation.png";
import ConservationIntl from "./assets/conservation-intl.png";
import Disney from "./assets/disney.png";
import IBM from "./assets/ibm.png";
import MoIbrahim from "./assets/mo-ibrahim.png";

const images: Array<{
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  alt?: string;
}> = [
  {
    ...MoIbrahim,
    alt: "Mo Ibrahim Foundation logo",
  },
  {
    ...AFDB,
    alt: "Africa Development Bank logo",
  },

  {
    ...IBM,
    alt: "IBM logo",
  },
  {
    ...Disney,
    alt: "Disney logo",
  },
  {
    ...BuffettFoundation,
    alt: "The Howard G. Buffett Foundation logo",
  },
  {
    ...ConservationIntl,
    alt: "Conservation Internation logo",
  },
  {
    ...Abbott,
    alt: "Abbott logo",
  },
];

export function FrontPage() {
  return (
    <Stack
      id="home"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:pt-[clamp(6rem,15vw,12rem)] pt-48",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <div
        className={clsx(
          "grid items-center",
          "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
          "clump:gap-[clamp(1rem,7vw,7rem)] gap-28"
        )}
      >
        <Stack
          className="clump:gap-[clamp(1rem,3vw,3rem)] gap-12"
          align="flex-start"
        >
          <Text
            data-aos="zoom-in"
            className="rounded-[35px] py-3 bg-accent-10 bg-opacity-10 clump:text-[clamp(12px,1vw,1rem)] text-base"
            px="lg"
          >
            🏆 Award Winning Investment Consultant
          </Text>
          <Title
            data-aos="fade-up"
            className="text-5xl font-bold font-clash leading-[72px]"
            order={1}
          >
            Unveiling Strategic Pathways to Success
          </Title>

          <Text
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-accent-40 leading-[36px]"
          >
            A market-leading, global, investment consultancy and strategic
            advisory company focused on high-growth African markets with
            expertise on international affairs affecting Africa and African
            business investments, providing innovative ideas on governance,
            stability and security, enterprise, and risk management.
          </Text>

          <Link href="/contact-us">
            <Button
              data-aos="fade-up"
              data-aos-delay="400"
              id="partners"
              className="text-white stripe"
            >
              Contact Us
            </Button>
          </Link>
        </Stack>

        <section
          data-aos="zoom-in"
          data-aos-delay="600"
          className="relative hidden sm:block"
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%)",
            }}
            className="absolute top-0 grid w-full h-full rounded-t-full"
          >
            <div className="p-1 m-1 mb-0 bg-white rounded-t-full"></div>
            <p
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
              className={clsx(
                "font-bold bottom-0 right-0 m-0 -mr-1 lg:-mr-2 bg-white pt-2 pb-[5%] uppercase leading-3",
                "absolute text-[#6A72832E] clump:text-[clamp(150%,3vw,3rem)] text-5xl"
              )}
            >
              credibilty
            </p>
          </div>

          <div className="relative p-5 pb-0">
            <div className="h-0 pb-[120%] relative">
              <Image
                placeholder="blur"
                blurDataURL={Skyscraper.blurDataURL}
                alt="skyscraper"
                src={Skyscraper.src}
                className="rounded-t-full"
                fill
              />
            </div>
          </div>
        </section>
      </div>

      <Group
        align="start"
        className="flex-col pt-16 clump:pt-[clamp(1rem,4vw,4rem)] sm:flex-row overflow-hidden"
      >
        <Text color="accent.4" className="max-w-[18rem] font-semibold">
          Trusted by companies worldwide:
        </Text>

        <div
          className={clsx(
            "flex-1 marquee flex overflow-hidden",
            css({
              "--ticker-duration": "20s",

              "& > div": {
                width: "fit-content",
                willChange: "transform",
                animationName: "marquee",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDuration: "var(--ticker-duration)",

                ":hover > &": {
                  animationPlayState: "paused",
                },
              },
            })
          )}
        >
          {Array.from({ length: 3 }, (e, idx) => (
            <div key={idx} className="flex h-14 min-w-max">
              {images.map(({ src, alt, blurDataURL }, idx) => (
                <Image
                  key={idx}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-contain !static px-6"
                  alt={alt}
                  src={src}
                />
              ))}
            </div>
          ))}
        </div>
      </Group>
    </Stack>
  );
}
