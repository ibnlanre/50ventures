import { clsx, Stack, Text, Title } from "@mantine/core";

import MamaWithSickle from "./assets/mama_with_sickle.png";
import EastAfricaExchange from "./assets/east_africa_exchange.png";
import Link from "next/link";

export function Investments() {
  return (
    <Stack
      className={clsx(
        "max-w-screen-xl mx-auto overflow-hidden",
        "clump:py-[clamp(6rem,9vw,9rem)] py-36",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pharetra, risus sem nibh. Aliquam ac morbi euismod nisi,
              imperdiet aliquam. Augue et in consectetur elementum mauris eget.
              Lacus, mi ut quis eget mattis at malesuada. Eget gravida dapibus
              vel, ut morbi nec viverra lectus. Luctus tellus tristique odio
              cras id vitae nam et metus. A elementum lectus pellentesque enim,
              eget. Pharetra suspendisse sit pellentesque egestas arcu
              hendrerit. Interdum integer.
            </Text>
            <Text>
              <span className="font-medium">Visit:</span>{" "}
              <Link href="https://www.ea-africaexchange.com" passHref>
                <a className="underline text-accent-70">
                  https://www.ea-africaexchange.com
                </a>
              </Link>
            </Text>
          </Stack>
        </div>

        <img
          src={EastAfricaExchange.src}
          width="100%"
          height={522}
          alt="man holding banner in rwanda"
          className="rounded-3xl"
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
        <img
          src={MamaWithSickle.src}
          width="100%"
          height={522}
          alt="man holding banner in rwanda"
          className="rounded-3xl"
          style={{
            objectFit: "cover",
            objectPosition: "20% 30%",
          }}
        />

        <div className="flex flex-col justify-between h-full gap-10">
          <Title className="text-[40px] font-bold font-clash">
            Africa Commodities Exchange Ltd. (AFEX)
          </Title>
          <Stack className="text-xl" spacing="md">
            <Text className="text-accent-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pharetra, risus sem nibh. Aliquam ac morbi euismod nisi,
              imperdiet aliquam. Augue et in consectetur elementum mauris eget.
              Lacus, mi ut quis eget mattis at malesuada. Eget gravida dapibus
              vel, ut morbi nec viverra lectus. Luctus tellus tristique odio
              cras id vitae nam et metus. A elementum lectus pellentesque enim,
              eget. Pharetra suspendisse sit pellentesque egestas arcu
              hendrerit. Interdum integer.
            </Text>
            <Text>
              <span className="font-medium">Visit:</span>{" "}
              <Link href="https://www.africaexchange.com" passHref>
                <a className="underline text-accent-70">
                  https://www.africaexchange.com
                </a>
              </Link>
            </Text>
          </Stack>
        </div>
      </section>
    </Stack>
  );
}
