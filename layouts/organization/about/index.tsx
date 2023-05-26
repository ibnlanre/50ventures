import { clsx, Spoiler, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";

import CorporateCouncil from "./assets/corporate_council_on_africa.jpeg";
import { css } from "@emotion/css";

export function About() {
  return (
    <div
      className={clsx(
        "grid items-center",
        "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
        "clump:sm:gap-[clamp(1rem,7vw,7rem)] gap-8 sm:gap-28"
      )}
    >
      <section data-aos="zoom-in" className="relative">
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%)",
          }}
          className="absolute top-0 grid w-full rounded-t-full h-1/2"
        >
          <div className="p-1 m-1 mb-0 bg-white rounded-t-full"></div>
        </div>

        <div
          className={clsx(
            "overflow-hidden group relative h-0 pb-[100%] m-4 rounded-t-full",
            css({
              filter: "grayscale(1)",
              "&:hover": {
                filter: "none",
              },
            })
          )}
        >
          <Image
            alt="Dr. Jendayi E. Frazer, and President Samia Suhulu Hassan of Tanzania in DC 2022."
            src={CorporateCouncil.src}
            placeholder="blur"
            blurDataURL={CorporateCouncil.blurDataURL}
            fill
            style={{
              objectPosition: "top right",
            }}
            className="object-cover rounded-t-full"
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
            }}
            className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
          >
            <Text
              className={clsx(
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                "text-white leading-[42px] font-medium text-xl w-10/12 mx-auto mb-[7%]"
              )}
            >
              Dr. Jendayi E. Frazer, and President of Tanzania Samia Suluhu Hassan.
            </Text>
          </div>
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
            content: "duration-500",
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
