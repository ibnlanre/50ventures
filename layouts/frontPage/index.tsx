import { Button, clsx, Group, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

import Marquee from "react-fast-marquee";
import Abbott from "./assets/abbott.png";
import Skyscraper from "./assets/skyscraper.jpeg";
import AFDB from "./assets/afdb.png";
import BuffettFoundation from "./assets/buffett-foundation.png";
import ConservationIntl from "./assets/conservation-intl.png";
import Disney from "./assets/disney.png";
import IBM from "./assets/ibm.png";
import MoIbrahim from "./assets/mo-ibrahim.png";
import Link from "next/link";

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
  const [skyscraper, setSkysraper] = useState<
    Partial<{
      content: ArrayBuffer;
      metadata: {
        originalWidth: number;
        originalHeight: number;
        width: number;
        height: number;
        type: string;
        dataURIBase64: string;
      };
    }>
  >({});

  return (
    <Stack
      id="home"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:pt-[clamp(2rem,7vw,7rem)] pt-28",
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
            className="rounded-[35px] py-3 bg-accent-10 bg-opacity-10 clump:text-[clamp(12px,1vw,1rem)] text-base"
            px="lg"
          >
            🏆 Award Winning Investment Consultant
          </Text>
          <Title
            className="text-5xl font-bold font-clash leading-[72px]"
            order={1}
          >
            Unveiling Strategic Pathways to Success
          </Title>

          <Text className="text-lg text-accent-40 leading-[36px]">
            A market-leading, global, investment consultancy and strategic
            advisory company focused on high-growth African markets with
            expertise on international affairs affecting Africa and African
            business investments, providing innovative ideas on governance,
            stability and security, enterprise, and risk management.
          </Text>

          <Link href="/contact-us" passHref>
            <Button id="partners" component="a" className="text-white stripe">
              Contact Us
            </Button>
          </Link>
        </Stack>

        <section className="relative hidden sm:block">
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
            <div
              style={{
                backgroundImage: `url(${Skyscraper.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20%",
                backgroundPositionY: "80%",
                backgroundSize: "cover",
              }}
              className="h-0 pb-[120%] rounded-t-full"
            ></div>
          </div>
        </section>
      </div>

      <Group
        align="start"
        className="flex-col pt-16 clump:pt-[clamp(1rem,4vw,4rem)] sm:flex-row"
      >
        <Text color="accent.4" className="max-w-[18rem] font-semibold">
          Trusted by more than 50+ companies worldwide:
        </Text>

        <Marquee gradient={false} className="flex-1">
          <div className="flex h-14">
            {images.map(({ src }, idx) => (
              <Image
                effect="blur"
                className="object-contain px-6"
                height="100%"
                width="auto"
                src={src}
                key={idx}
              />
            ))}
          </div>
        </Marquee>
      </Group>
    </Stack>
  );
}
