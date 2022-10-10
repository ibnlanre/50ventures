import { Tabs, clsx } from "@mantine/core";
import { useState } from "react";
import { About } from "./about";
import { MissionStatement } from "./missionStatement";
import { Team } from "./team";

export function Organization() {
  const [activeTab, setActiveTab] = useState<string | null>("about");

  return (
    <div
      id="about"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:pt-[clamp(4rem,9vw,9rem)] pt-36",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <Tabs
        value={activeTab}
        defaultValue="about"
        onTabChange={setActiveTab}
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
      >
        <Tabs.List>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="mission_statement">Mission Statement</Tabs.Tab>
          {/* <Tabs.Tab value="team">Team</Tabs.Tab> */}
        </Tabs.List>

        {activeTab === "about" && (
          <Tabs.Panel value="about">
            <About />
          </Tabs.Panel>
        )}

        {activeTab === "mission_statement" && (
          <Tabs.Panel value="mission_statement">
            <MissionStatement />
          </Tabs.Panel>
        )}

        {activeTab === "teams" && (
          <Tabs.Panel value="team">
            <Team />
          </Tabs.Panel>
        )}
      </Tabs>
    </div>
  );
}
