import { clsx, Spoiler, Stack, Title } from "@mantine/core";
import Image from "next/image";

import JobSite from "./assets/job-site.jpeg";

export function MissionStatement() {
  return (
    <div
      id="mission-statement"
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

        <div className="relative h-0 pb-[100%] m-4">
          <Image
            alt="Dr. Jendayi Frazer at the Job Site"
            src={JobSite.src}
            placeholder="blur"
            blurDataURL={JobSite.blurDataURL}
            fill
            style={{
              objectPosition: "top right",
            }}
            className="object-cover rounded-t-full"
          />
        </div>
      </section>

      <Stack spacing="xl">
        <Title className="text-3xl font-clash" order={2} weight={700}>
          MISSION STATMENT
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
          50 Ventures creates strategic pathways to success for our clients by
          cultivating opportunities to invest and engage across economic and
          social sectors in Africa. We work with businesses and organizations to
          promote entrepreneurial and innovative solutions that promote
          sustainable growth and economic freedom while upholding standards and
          values of integrity, respect and dignity.
        </Spoiler>
      </Stack>
    </div>
  );
}
