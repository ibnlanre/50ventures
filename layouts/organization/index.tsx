import { Tabs, clsx } from "@mantine/core";
import { About } from "./about";
import { MissionStatement } from "./missionStatement";
import { Team } from "./team";

export function Organization() {
  return (
    <div
      id="organization"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:pt-[clamp(4rem,6vw,6rem)] pt-24",
        "clump:pb-[clamp(5rem,8vw,8rem)] pb-32",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <Tabs
        classNames={{
          root: "overflow-auto grid clump:gap-[clamp(1rem,7vw,7rem)] gap-28",
          tabLabel: "text-lg font-semibold flex items-center uppercase",
          tab: "p-0 pb-3 text-accent-40 text-opacity-30",
          tabsList: "flex gap-x-8 gap-y-4",
        }}
        styles={{
          tabsList: {
            borderBottom: "3px solid transparent",
          },
          tab: {
            "&[data-active]": {
              borderColor: "#EEB111",
              borderWidth: "3px",
            },
            "&:hover": {
              backgroundColor: "transparent",
              borderWidth: "3px",
            },
          },
        }}
        defaultValue="about"
      >
        <Tabs.List>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="mission_statement">Mission Statement</Tabs.Tab>
          <Tabs.Tab value="team">Team</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about">
          <About />
        </Tabs.Panel>

        <Tabs.Panel value="mission_statement">
          <MissionStatement />
        </Tabs.Panel>

        <Tabs.Panel value="team">
          <Team />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}