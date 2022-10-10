import { css } from "@emotion/css";
import { ActionIcon, clsx, Group, Stack, Table, Title } from "@mantine/core";
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
      id="awards"
      className={clsx(
        "max-w-screen-xl mx-auto overflow-hidden",
        "clump:gap-[clamp(2.5rem,5vw,5rem)] gap-20",
        "clump:pt-[clamp(5rem,9vw,9rem)] pt-36",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
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
          idx === page && (
            <Table data-aos-once="false" key={idx}>
              {awardPage.map(({ date, award, description }, index) => {
                return (
                  <tr
                    data-aos="fade-up"
                    data-aos-delay={200 * index}
                    className="align-top clump:text-[clamp(1rem,2vw,1.5rem)]"
                    key={index}
                  >
                    <td className="py-5 font-bold leading-loose text-accent-40">
                      {date}
                    </td>
                    <td className="px-4 py-5 font-semibold leading-loose sm:px-8">
                      {award}
                    </td>
                    <td className="py-5 font-medium leading-loose text-accent-40">
                      {description}
                    </td>
                  </tr>
                );
              })}
            </Table>
          )
        );
      })}
    </Stack>
  );
}
