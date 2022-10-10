import { clsx, Group, Stack, Text, Title } from "@mantine/core";

import BHWLogo from "./assets/bhw_logo.jpeg";
import Condo from "./assets/condo.png";
import FrontYard from "./assets/front_yard.png";
import Link from "next/link";

export function BHW() {
  return (
    <Stack
      className={clsx(
        "max-w-screen-xl mx-auto overflow-hidden",
        "clump:py-[clamp(6rem,12vw,12rem)] py-48",
        "clump:px-[clamp(5px,5vw,5rem)] px-20",
        "clump:gap-[clamp(3rem,7vw,7rem)] gap-28"
      )}
    >
      <section
        className={clsx(
          "grid items-center sm:grid-flow-col",
          "clump:gap-[clamp(1rem,4vw,4rem)] gap-16"
        )}
      >
        <div
          className={clsx(
            "sm:max-w-[40vw] lg:max-w-[25vw]",
            "lg:justify-between h-full gap-10",
            "flex flex-col justify-center"
          )}
        >
          <Title className="text-[40px] font-bold font-clash">
            BHW International
          </Title>
          <Stack className="text-lg" spacing="md">
            <Text className="grid gap-3 text-accent-40">
              <span>
                An integrated real estate investment company, that provides
                secure, affordable, and functional homes by building tangible
                assets that can be passed down to future generations.
              </span>
              <span>
                The growing demand for housing has accelerated over the years.
                As a result, millions of people have experienced homelessness,
                house insecurity, and possible evictions. Fostering the creation
                of low-cost rentals and making communities financially
                accessible to more families is our North star at BHW.
              </span>
            </Text>
            <Text>
              <span className="font-medium">Visit:</span>{" "}
              <Link href="https://www.africaexchange.com" passHref>
                <a className="underline break-all text-accent-70">
                  https://www.africaexchange.com
                </a>
              </Link>
            </Text>
          </Stack>
        </div>

        <section className="grid gap-6 lg:grid-flow-col">
          <div
            className={clsx(
              "grid md:grid-flow-col gap-6 lg:flex flex-row justify-center",
              "lg:max-w-[25vw] xl:max-w-[30vw] lg:flex-col"
            )}
          >
            <div>
              <img
                className="rounded-3xl"
                src={BHWLogo.src}
                width="100%"
                height="100%"
                alt="bhw logo"
                style={{
                  objectFit: "cover",
                  objectPosition: "0 5%",
                }}
              />
            </div>
            <div>
              <img
                src={Condo.src}
                width="100%"
                height="100%"
                alt="condominum"
                className="rounded-3xl"
                style={{
                  objectFit: "cover",
                  objectPosition: "0 5%",
                }}
              />
            </div>
          </div>
          <Stack className="flex-col-reverse justify-center lg:flex-col">
            <Group spacing={0} position="center" className="max-w-4xl">
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
                className="flex-1 py-4 clump:text-[clamp(1.25rem,2vw,1.5rem)] text-2xl leading-normal text-center font-clash"
              >
                Creating generational wealth through home ownership and rental
                services
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
            <img
              src={FrontYard.src}
              width="100%"
              height="auto"
              alt="home with front porch"
              className="rounded-3xl"
              style={{
                objectFit: "cover",
                objectPosition: "0 5%",
              }}
            />
          </Stack>
        </section>
      </section>

      <section
        className={clsx(
          "grid",
          "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
          "clump:gap-[clamp(1rem,8vw,8rem)] gap-32"
        )}
      >
        <Stack>
          <Title className="text-[40px] font-bold font-clash">Mission</Title>
          <Text className="text-lg text-accent-40">
            To create lasting generational wealth by helping clients and
            families buy, rent, sell, and invest in real estate.
          </Text>
        </Stack>

        <Stack>
          <Title className="text-[40px] font-bold font-clash">Vision</Title>
          <Text className="text-lg text-accent-40">
            To be the leading real estate development company that will provide
            decent, accessible, comfortable, and affordable houses while
            achieving financial legacies for families and communities.
          </Text>
        </Stack>
      </section>
    </Stack>
  );
}
