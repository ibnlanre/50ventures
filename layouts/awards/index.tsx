import { css } from "@emotion/css";
import {
  ActionIcon,
  clsx,
  Group,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState } from "react";

const awards: Array<
  Array<{ date: number; award: string; description: string }>
> = [
  [
    {
      date: 2010,
      award: "Dame Grand Commander in the Humane Order of African Redemption",
      description:
        "Investiture Ceremony conducted by President Ellen Johnson Sirleaf, Monrovia, Liberia",
    },
    {
      date: 2009,
      award: "Secretary of State's Distinguished Service Medal",
      description: "U.S. Department of State, Washington, D.C.",
    },
    {
      date: 2008,
      award: "Distinguished Leadership Award",
      description:
        "African Presidential Archives & Research Center, Boston University",
    },
  ],
  [
    {
      date: 2003,
      award: "Constituent of the Year",
      description: "Constituency for Africa, non-profit, Washington, D.C.",
    },
    {
      date: 1990,
      award: 'Delegate to Bellagio "New Faces" Conference',
      description:
        "International Institute for Strategic Studies (UK) and Arms Control Association (D.C.)",
    },
  ],
];

export function Awards() {
  const [page, setPage] = useState(0);

  return (
    <Stack
      spacing={80}
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:sm:pb-[clamp(4rem,6vw,6rem)] pb-16 sm:pb-24",
        "clump:sm:px-[clamp(5px,5vw,5rem)] px-4 sm:px-20"
      )}
    >
      <Group position="apart">
        <Title className="text-3xl font-clash" order={2} weight={700}>
          AWARDS
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
            disabled={page === awards.length - 1}
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

      {awards.map((awardPage, idx) => {
        return (
          <Table hidden={idx !== page} key={idx}>
            <tbody>
              {awardPage.map(({ date, award, description }, index) => {
                return (
                  <tr className="align-top" key={index}>
                    <td className="px-8 text-3xl font-bold leading-loose text-accent-40 py-11">
                      {date}
                    </td>
                    <td className="px-8 text-2xl font-semibold leading-loose py-11">
                      {award}
                    </td>
                    <td className="px-8 text-2xl font-medium leading-loose text-accent-40 py-11">
                      {description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        );
      })}
    </Stack>
  );
}
