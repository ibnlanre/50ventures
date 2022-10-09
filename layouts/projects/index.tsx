import { css } from "@emotion/css";
import {
  ActionIcon,
  clsx,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState } from "react";

const projects: Array<{
  title: string;
  brief: Array<string>;
  impact: string;
}> = [
  {
    title: "Global Fellowship Program",
    brief: [
      "Championed start-up mentorship program with the heads of major International and African institutions shaping Africa (AfDB, ITC, UNECA, WTO).",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title: "Fortune 500 Entertainment company",
    brief: [
      "Supported executives with leadership access to top government decision makers.",
      "Utilized data and presented market research beyond a country focus to include sub-nationaland regional population centers, income levels, online platforms and other relevant variables.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title: "Fortune 500 U.S Healthcare company",
    brief: [
      "Co-developed a new public-private partnership model for market advantage over competitors.",
      "Developed new funding strategies for major national initiatives.",
      "Supported product development and pilot programs in new market space.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title: "Major Conservation-focused U.S. foundation",
    brief: [
      "Provided access to leadership on regulatory issues for conservation.",
      "Established national data sharing and capacity building  agreements with the Ministry of Environment and the Office of Statistics in Kenya and Rwanda and with UNECA.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title: "Nigeria and Rwanda commodity exchanges",
    brief: [
      "Developed model to level the playing field for farmers; provide value added services to capture market share; and partnered with farmer groups and cooperative for scale.",
      "Managed group operations from 2012 - 2019; recruited additional investors in 2015 and 2019; and created new board structures to ensure sustainability.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title:
      "U.S. Foundation work in D.R Congo on Conflict Resolution and Development",
    brief: [
      "Developed a Peace Center in with national and local government collaboration.",
      "Established local peace dialogues with broad stakeholder participation - combatants, religious groups, youth, civil society, etc.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title: "Energy and Infrastructure Expansion",
    brief: [
      "Assisted African energy and infrastructure companies on strategy, regulatory issues and market access for their expansion regionally.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
  {
    title: "Fortune 500 U.S. technology company ",
    brief: [
      "Introduced technology executives to key African leaders, and to African Universities and Research Institutions.",
      "Developed market strategies beyond traditional financial business customers to educational and thought leaders to introduce and leverage the Watson Platform across the continent.",
    ],
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet metus purus a metus justo, neque laoreet venenatis varius. Pellentesque egestas ultricies in eu. Arcu amet non, ullamcorper nisl viverra tempor. Nullam neque vivamus nulla bibendum ultrices. ",
  },
];

export function Projects() {
  const [page, setPage] = useState(0);

  return (
    <Stack
      id="projects"
      spacing={80}
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:pt-[clamp(4rem,6vw,6rem)] pt-24",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <Group position="apart">
        <Title className="text-3xl font-clash" order={2} weight={700}>
          PROJECTS
        </Title>

        <Group>
          <ActionIcon
            size={50}
            disabled={!page}
            onClick={() => setPage(page - 1)}
            className={clsx(
              "rounded-full",
              css({
                backgroundColor: "#EDEDED",

                "&:disabled": {
                  opacity: "30%",
                },
              })
            )}
          >
            <ArrowLeft color="#002D62" />
          </ActionIcon>
          <ActionIcon
            size={50}
            disabled={page === projects.length - 1}
            className={clsx(
              "rounded-full",
              css({
                backgroundColor: "#EDEDED",

                "&:disabled": {
                  opacity: "30%",
                },
              })
            )}
            onClick={() => setPage(page + 1)}
          >
            <ArrowRight color="#002D62" />
          </ActionIcon>
        </Group>
      </Group>

      <Text className="leading-[40px] text-lg">
        We believe that our work is the best way to get to know us. These are
        our transformative work over the years. Showing you the extraordinary
        possibilities of your business is why we exist.
      </Text>

      {projects.map(({ title, brief, impact }, idx) => {
        return (
          <article
            style={{
              background:
                "linear-gradient(180deg, #EEB111 0%, #3B90FB 100%),linear-gradient(0deg, #EFF5FC, #EFF5FC)",
            }}
            className="p-0.5 rounded-[42px] h-max"
            hidden={idx !== page}
          >
            <div className="bg-[#EFF5FC] rounded-[40px]">
              <Title className="clump:px-[clamp(1rem,5vw,5rem)] px-20 pt-16 pb-4 font-clash">
                {title}
              </Title>
              <hr
                style={{
                  border: "none",
                  backgroundImage:
                    "linear-gradient(270.01deg, #EEB111 45.68%, #3B90FB 49.99%)",
                  height: "2px",
                }}
              />

              <Stack className="clump:px-[clamp(1rem,5vw,5rem)] px-20 my-14 text-accent-40">
                <Title className="text-2xl font-semibold" order={4}>
                  Project Brief:
                </Title>
                <ul
                  className="my-0 list-[&#8212;]"
                >
                  {brief.map((item, index) => (
                    <li className="leading-[40px] text-lg" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Stack>

              <Stack className="clump:px-[clamp(1rem,5vw,5rem)] px-20 pb-14 text-accent-40">
                <Title className="text-2xl font-semibold" order={4}>
                  Impact:
                </Title>
                <Text className="leading-[40px] text-lg">{impact}</Text>
              </Stack>
            </div>
          </article>
        );
      })}
    </Stack>
  );
}
