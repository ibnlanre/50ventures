import { Button, clsx, Group, Stack, Text, Title } from "@mantine/core";

import Marquee from "react-fast-marquee";

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
      className={clsx(
        "max-w-screen-xl mx-auto gap-20",
        "clump:sm:pt-[clamp(4rem,6vw,6rem)] pt-16 sm:pt-24",
        "clump:sm:px-[clamp(5px,5vw,5rem)] px-4 sm:px-20"
      )}
    >
      <div
        className={clsx(
          "grid items-center",
          "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
          "clump:sm:gap-[clamp(1rem,7vw,7rem)] gap-8 sm:gap-28"
        )}
      >
        <Stack spacing={50} align="flex-start">
          <Text className="rounded-md bg-[#FDFEFF]" py="sm" px="lg">
            🏆 Award Winning Investment Consultant
          </Text>
          <Title className="text-5xl font-bold font-clash leading-[72px]" order={1}>Unveiling Strategic Pathways to Success</Title>
          
          <Text className="text-lg text-accent-40 leading-[36px]">
            A market-leading, global, investment consultancy and strategic
            advisory company focused on high-growth African markets with
            expertise on international affairs affecting Africa and African
            business investments, providing innovative ideas on governance,
            stability and security, enterprise, and risk management.
          </Text>
          <Button className="stripe">Contact Us</Button>
        </Stack>

        <section className="relative">
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
              className="absolute text-[#6A72832E] text-[200%] font-bold bottom-0 right-0 m-0 -mr-6 bg-white pt-2 pb-[5%] uppercase"
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

      <Group className="flex-col md:flex-row">
        <Text className="max-w-[18rem]">
          Trusted by more than 50+ companies worldwide:
        </Text>

        <Marquee gradient={false} className="flex-1">
          <div className="flex h-14">
            {images.map(({ src }, idx) => (
              <img
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
