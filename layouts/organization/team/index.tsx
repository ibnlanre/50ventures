import { clsx, Spoiler, Stack, Title } from "@mantine/core";
import WomanWithGlasses from "./assets/woman-with-glasses.jpeg";

export function Team() {
  return (
    <div
      className={clsx(
        "grid items-center",
        "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
        "clump:sm:gap-[clamp(1rem,7vw,7rem)] gap-8 sm:gap-28"
      )}
    >
      <Stack spacing="xl">
        <Title className="text-3xl font-clash" order={2} weight={700}>
          MEET THE TEAM
        </Title>
        <Spoiler
          classNames={{
            control: "underline text-accent-40",
          }}
          className="leading-[40px] text-lg"
          maxHeight={320}
          hideLabel={false}
          showLabel="View More"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
          lorem fusce mauris fermentum congue sit maecenas. Fermentum eget elit
          ullamcorper congue quis nulla sit. Amet mauris tristique placerat
          commodo. Tristique vitae at massa porta eleifend sagittis consectetur
          vel. Interdum egestas enim dignissim ultrices cursus sem amet sit.
          Suspendisse volutpat sit et aenean auctor. Imperdiet.
        </Spoiler>
        <section className="relative">
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
                backgroundImage: `url(${WomanWithGlasses.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20%",
                backgroundPositionY: "80%",
                backgroundSize: "cover",
              }}
              className="h-0 pb-[100%] rounded-t-full"
            ></div>
          </div>
        </section>
      </Stack>
    </div>
  );
}
