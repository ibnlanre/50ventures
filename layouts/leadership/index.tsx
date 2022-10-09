import {
  clsx,
  Divider,
  Group,
  ScrollArea,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MazePattern from "./assets/maze-pattern.png";
import JendayiFrazer from "./assets/jendayi-frazer.png";

export function Leadership() {
  return (
    <Stack
      id="leadership"
      className={clsx(
        "max-w-screen-xl mx-auto clump:gap-[clamp(4rem,10vw,20rem)]",
        "clump:pt-[clamp(4rem,6vw,6rem)] pt-24",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <Title className="text-3xl font-clash" order={3}>
        LEADERSHIP
      </Title>

      <Group className="clump:sm:gap-[clamp(6px,6vw,6rem)] gap-x-2 gap-y-6 sm:gap-24 flex-col sm:flex-row items-start">
        <Text color="accent.4" className="flex-1 text-2xl">
          Jendayi E. Frazer is a renowned global policy leader and expert on
          African Affairs headlining a new revolution of investment in Africass
          most promising growth markets.
        </Text>
        <Divider orientation="vertical" />
        <Stack className="overflow-clip">
          <div className="relative">
            <p
              style={{
                fontSize: "110px",
                lineHeight: "75%",
                fontWeight: 700,
                marginBlock: 0,
              }}
            >
              35+
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="700"
              height="100"
              viewBox="0 0 700 100"
              style={{
                position: "absolute",
                top: "-5px",
                zIndex: -1,
              }}
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

          <Text size={30} className="leading-[60px] max-w-xs">
            Years of Advisory Experience
          </Text>
        </Stack>
      </Group>

      <ScrollArea type="never">
        <section className="flex gap-24">
          <Stack className="min-w-[250px]" spacing={100}>
            <Stack>
              <Title size={26}>Policy</Title>
              <Text className="text-lg" color="accent.4">
                She has built movements across the globe by providing expertise
                in leadership and governance program development, university
                engagement strategies, and event representation, coordination,
                and production.
              </Text>
            </Stack>

            <Stack>
              <Title size={26}>Investment</Title>
              <Spoiler
                hideLabel="Hide"
                showLabel="View More"
                maxHeight={150}
                className="text-lg text-accent-40"
              >
                She has built movements across the globe by providing expertise
                in leadership and governance program development, university
                engagement strategies, and event representation, coordination,
                and production.
              </Spoiler>
            </Stack>
          </Stack>

          <section className="relative self-center h-max min-w-[360px]">
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
              <div className="h-0 pb-[150%]"></div>
            </div>
          </section>

          <Stack className="min-w-[250px]" spacing={100}>
            <Stack>
              <Title size={26}>Consultancy</Title>
              <Text className="text-lg" color="accent.4">
                Her business advisory capabilities have helped clients to
                optimize performance by providing high-quality strategic advice
                on business development strategies in emerging markets, risk and
                security assessments and mitigation.
              </Text>
            </Stack>

            <Stack>
              <Title size={26}>BHW International</Title>
              <Spoiler
                hideLabel="Hide"
                showLabel="View More"
                maxHeight={150}
                className="text-lg text-accent-40"
              >
                BHW is an integrated real estate holding company that provides
                secure, affordable and functional homes by building tangible
                assets that can be passed down to future generation.
              </Spoiler>
            </Stack>
          </Stack>
        </section>
      </ScrollArea>

      <Stack className="max-w-4xl mx-auto" align="center">
        <Group spacing="xl" position="center" className="max-w-4xl">
          <Text
            className="self-start mt-0 text-white border text-7xl font-clash"
            style={{
              WebkitTextStroke: "1px #002D62",
            }}
          >
            &#8220;
          </Text>
          <Text
            weight={600}
            className="py-4 text-4xl font-clash leading-[64px] flex-1"
          >
            You can make money, but I want you to make money and do good as
            well. Do good making money, and make the money do good.
          </Text>
          <Text
            className="self-end mb-0 text-white text-7xl font-clash"
            style={{
              WebkitTextStroke: "1px #002D62",
            }}
          >
            &#8222;
          </Text>
        </Group>
        <Text className="self-end text-xl font-medium">
          - Jendayi E. Frazer
        </Text>
      </Stack>
    </Stack>
  );
}
