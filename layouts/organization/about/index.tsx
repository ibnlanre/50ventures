import { clsx, Spoiler, Stack, Text, Title } from "@mantine/core";
import HijabLady from "./assets/hijab-lady.png";

export function About() {
  return (
    <div
      className={clsx(
        "grid items-center",
        "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
        "clump:sm:gap-[clamp(1rem,7vw,7rem)] gap-8 sm:gap-28"
      )}
    >
      <section data-aos="fade-up" className="relative">
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%)",
          }}
          className="absolute top-0 grid w-full rounded-t-full h-1/2"
        >
          <div className="p-1 m-1 mb-0 bg-white rounded-t-full"></div>
        </div>
        <div className="relative p-4">
          <div
            style={{
              backgroundImage: `url(${HijabLady.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "20%",
              backgroundPositionY: "80%",
              backgroundSize: "cover",
            }}
            className="h-0 pb-[100%] rounded-t-full"
          ></div>
        </div>
      </section>

      <Stack spacing="xl">
        <Title className="text-3xl font-clash" order={2} weight={700}>
          ABOUT
        </Title>
        <Spoiler
          maxHeight={320}
          hideLabel="Hide"
          showLabel="View More"
          classNames={{
            root: "leading-[40px] text-accent-40 text-lg",
            control: "underline text-accent-70",
            content: "duration-500"
          }}
        >
          <Stack>
            <Text className="leading-[40px] text-lg">
              50 ventures is a market-leading, global, investment consultancy
              and strategic advisory company focused on high-growth African
              markets by providing strategic expertise on international affairs
              to key economic sectors such as African business investments,
              financial services, real estate, agriculture, and across emerging
              and frontier markets. Founded in 2011 by Jendayi Frazer, 50
              ventures bring together distinct capabilities and experts to
              deliver performance-oriented investment solutions to clients and
              build strategic relationships to help companies achieve their
              objectives and succeed on the continent.
            </Text>

            <Text className="leading-[40px] text-lg">
              Through its services and investments focusing on economic
              inclusiveness, entrepreneurship, and social responsibility, 50
              Ventures seeks to elevate the status of Africa in the world and
              create a positive, enabling environment for Africa's future
              generations.Leveraging on an broad network built on knowledge from
              over fifty years of professional experience in Africa, 50 Ventures
              provides innovative ideas on governance, stability and security,
              enterprise, and risk management along with an extensive network of
              key relationships throughout the African continent.
            </Text>
          </Stack>
        </Spoiler>
      </Stack>
    </div>
  );
}
