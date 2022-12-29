import { clsx, Stack, Text, Title } from "@mantine/core";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

import MamaWithSickle from "./assets/mama_with_sickle.png";
import EastAfricaExchange from "./assets/east_africa_exchange.png";
import Link from "next/link";

export function Investments() {
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
          "grid items-center",
          "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
          "clump:gap-[clamp(1rem,7vw,7rem)] gap-28"
        )}
      >
        <div className="flex flex-col justify-between h-full gap-10">
          <Title className="text-[40px] font-bold font-clash">
            East Africa Exchange (EAX)
          </Title>
          <Stack className="text-xl" spacing="md">
            <Text className="text-accent-40">
              The East Africa Exchange (EAX) is a regional commodity exchange
              legally registered throughout East Africa Community (EAC) partner
              states and is currently established with a head office in Kigali
              Rwanda. EAX offers participants of the physical commodities
              markets, such as agricultural / mineral producers and traders an
              excellent opportunity to trade their products locally, regionally
              and on the international markets. EAX was initially created to
              link smallholder farmers to global markets, secure competitive
              prices for products, and facilitate access to financing
              opportunities. Today it is expanding its trading operations in
              mineral and metal space.
            </Text>
            <Text>
              <span className="font-medium">Visit:</span>{" "}
              <Link
                href="https://www.ea-africaexchange.com"
                className="underline break-all text-accent-70"
              >
                https://www.ea-africaexchange.com
              </Link>
            </Text>
          </Stack>
        </div>

        <Image
          effect="blur"
          src={EastAfricaExchange.src}
          width="100%"
          height={522}
          alt="man holding banner in rwanda"
          className="rounded-3xl backdrop-grayscale hover:backdrop-filter-none"
          style={{
            objectFit: "cover",
            objectPosition: "0 5%",
          }}
        />
      </section>

      <section
        className={clsx(
          "grid items-center",
          "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
          "clump:gap-[clamp(1rem,7vw,7rem)] gap-28"
        )}
      >
        <Image
          effect="blur"
          src={MamaWithSickle.src}
          width="100%"
          height={522}
          alt="woman standing beside X"
          className="rounded-3xl filter grayscale hover:filter-none"
          style={{
            objectFit: "cover",
            objectPosition: "20% 30%",
            filter: "grayscale(100%)",
          }}
        />

        <div className="flex flex-col justify-between h-full gap-10">
          <Title className="text-[40px] font-bold font-clash">
            Africa Commodities Exchange Ltd. (AFEX)
          </Title>
          <Stack className="text-xl" spacing="md">
            <Text className="grid gap-3 text-accent-40">
              <span>
                At AFEX, we harness Africa's commodities and talent to build
                shared wealth and prosperity. Our infrastructure and platform
                investments work to unlock capital to power a trust economy in
                Africa's commodities markets.
              </span>
              <span>
                Since inception in 2014, we have developed and deployed a viable
                commodities exchange model for the African market, and are on
                track to impact one million producers; providing services in
                productivity and value capture and access to finance and
                markets. By deploying an efficient market system, we will
                facilitate trade with Africa worth over USD500 million in the
                next five years.
              </span>
            </Text>
            <Text>
              <span className="font-medium">Visit:</span>{" "}
              <Link
                href="https://www.africaexchange.com"
                className="underline break-all text-accent-70"
              >
                https://www.africaexchange.com
              </Link>
            </Text>
          </Stack>
        </div>
      </section>
    </Stack>
  );
}
