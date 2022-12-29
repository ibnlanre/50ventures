import { clsx, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import MazePattern from "./assets/maze-pattern.png";
import JendayiFrazer from "./assets/jendayi-frazer.png";
import Link from "next/link";

export function Leadership() {
  return (
    <Stack
      id="leadership"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:gap-[clamp(2.5rem,5vw,20rem)] gap-80",
        "clump:pt-[clamp(5rem,9vw,9rem)] pt-36",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <Title className="text-3xl font-clash" order={3}>
        LEADERSHIP
      </Title>

      <Group className="clump:sm:gap-[clamp(6px,6vw,6rem)] gap-x-2 gap-y-8 sm:gap-24 flex-col sm:flex-row items-start">
        <Text color="accent.4" className="flex-1 text-2xl leading-relaxed">
          Jendayi E. Frazer is a renowned global policy leader and expert on
          African Affairs headlining a new revolution of investment in Africa's
          most promising growth markets.
        </Text>
        <Divider className="hidden sm:block" orientation="vertical" />
        <Stack data-aos="zoom-in" className="overflow-clip">
          <div className="relative">
            <p
              style={{
                zIndex: 1,
                position: "relative",
                fontSize: "110px",
                lineHeight: "75%",
                fontWeight: 700,
                marginBlock: 0,
              }}
            >
              35+
            </p>
            <div
              style={{
                position: "absolute",
                top: "-5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="700"
                height="100"
                viewBox="0 0 700 100"
                fill="none"
              >
                <text
                  fill="white"
                  x="5"
                  y="90"
                  stroke="#EEB111"
                  strokeWidth={3}
                  fontSize={110}
                  paintOrder="stroke"
                  strokeLinejoin="round"
                  style={{
                    lineHeight: "75%",
                    fontWeight: 700,
                  }}
                >
                  35+
                </text>
              </svg>
            </div>
          </div>

          <Text size={30} className="sm:leading-[60px] max-w-xs">
            Years of Advisory Experience
          </Text>
        </Stack>
      </Group>

      <section
        className={clsx(
          "grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))]",
          "clump:gap-y-[clamp(2rem,6vw,6rem)] gap-y-24",
          "grid gap-x-24 lg:gap-12 xl:gap-24 "
        )}
      >
        <Stack className="gap-x-24 clump:gap-y-[clamp(2rem,6vw,6rem)] gap-y-24">
          <Stack data-aos="fade-up">
            <Title size={26}>Policy</Title>
            <Text className="text-lg" color="accent.4">
              She has built movements across the globe by providing expertise in
              leadership and governance program development, university
              engagement strategies, and event representation, coordination, and
              production.
            </Text>
          </Stack>

          <Stack data-aos="fade-up" data-aos-delay="250">
            <Title size={26}>Investment</Title>
            <Text className="text-lg text-accent-40">
              Africa is the world's next big growth market. Jendayi is committed
              to protecting and enhancing investment opportunities in the
              African market. We are currently identifying additional investment
              opportunities that also benefit the standing of African countries,
              economies, and people. Our current investments include
            </Text>
            <Link href="/investments" className="underline text-accent-70">
              <Text>View More</Text>
            </Link>
          </Stack>
        </Stack>

        <LazyLoadComponent>
          <section
            data-aos="zoom-in"
            data-aos-delay="350"
            className="relative self-center hidden lg:block h-max"
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%)",
              }}
              className="absolute top-0 grid w-full h-full rounded-full"
            >
              <div
                style={{
                  backgroundImage: `url(${MazePattern.src})`,
                  backgroundSize: "contain",
                }}
                className="p-1 m-1 bg-white rounded-full"
              ></div>
            </div>
            <div
              style={{
                backgroundImage: `url(${JendayiFrazer.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "contain",
              }}
              className="relative p-4 rounded-b-full"
            >
              <div className="h-0 pb-[175%]"></div>
            </div>
          </section>
        </LazyLoadComponent>

        <Stack className="gap-x-24 clump:gap-y-[clamp(2rem,6vw,6rem)] gap-y-24">
          <Stack data-aos="fade-up">
            <Title size={26}>Consultancy</Title>
            <Text className="text-lg" color="accent.4">
              Her business advisory capabilities have helped clients to optimize
              performance by providing high-quality strategic advice on business
              development strategies in emerging markets, risk and security
              assessments and mitigation.
            </Text>
          </Stack>

          <Stack data-aos="fade-up" data-aos-delay="250">
            <Title size={26}>BHW International</Title>
            <Text className="text-lg text-accent-40">
              BHW is an integrated real estate holding company that provides
              secure, affordable and functional homes by building tangible
              assets that can be passed down to future generation.
            </Text>
            <Link href="/bhw" className="underline text-accent-70">
              <Text>View More</Text>
            </Link>
          </Stack>
        </Stack>
      </section>

      <Stack className="max-w-4xl mx-auto" align="center">
        <Group spacing="xl" position="center" className="max-w-4xl">
          <Text
            className="self-start mt-0 text-white border text-7xl font-clash"
            style={{
              WebkitTextStroke: "1px #002D62",
              fontWeight: "bolder",
            }}
          >
            &#8220;
          </Text>
          <Text
            weight={600}
            data-aos="zoom-in"
            className="py-4 clump:text-[clamp(1.5rem,2vw,2.25rem)] text-4xl font-clash clump:leading-[clamp(3ex,4vw,4rem)] leading-[64px] flex-1"
          >
            You can make money, but I want you to make money and do good as
            well. Do good making money, and make the money do good.
          </Text>
          <Text
            className="self-end mb-0 text-white text-7xl font-clash"
            style={{
              WebkitTextStroke: "1px #002D62",
              fontWeight: "bolder",
            }}
          >
            &#8222;
          </Text>
        </Group>
        <Text
          data-aos="zoom-in-left"
          data-aos-delay="200"
          className="self-end text-xl font-medium"
        >
          - Jendayi E. Frazer
        </Text>
      </Stack>
    </Stack>
  );
}
