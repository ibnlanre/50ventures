import OvalOffice from "./assets/oval_office_white_house_briefing.jpg";
import CorporateCouncil from "./assets/corporate_council_on_africa.jpeg";
import HandShakeMeeting from "./assets/hand_shake_meeting.jpeg";
import PresidentBush from "./assets/president_bush.jpeg";
import SouthSudanPresident from "./assets/south_sudan_president.jpg";
import SittingWithMadam from "./assets/sitted_with_madam.jpeg";
import PresidentMandela from "./assets/president_mandela.png";
import CarnegieMellon from "./assets/carnegie_mellon_university.jpg";
import { clsx, Group, Stack, Text, Title } from "@mantine/core";
import { Frame } from "./frame";

const imagePackOne = [
  {
    ...OvalOffice,
    id: "oval_office",
    alt: "Bush, Secretary Powell, Vice President Cheney, and US Trade Representative Zoellick, Oval Office, White House Briefing",
    transform:
      "translate(-0.1156px, -0.410383px) scale(0.00187109px, 0.00360074px)",
    displayWidth: 891,
    displayHeight: 463,
  },
];

const imagePackTwoLeft = [
  {
    ...CorporateCouncil,
    id: "corporate_council",
    alt: "Corporate Council on Africa",
    transform: "translate(0 -0.431973) scale(0.00130208 0.00182026)",
    displayWidth: 548,
    displayHeight: 392,
  },

  {
    ...HandShakeMeeting,
    id: "hand_shake_meeting",
    alt: "Hand Shake Meeting",
    transform: "translate(-0.0406834) scale(0.00105602 0.0014771)",
    displayWidth: 891,
    displayHeight: 637,
  },

  {
    ...SouthSudanPresident,
    id: "south_sudan_president",
    alt: "Meeting with President Salva Kiir at State House, Juba, South Sudan",
    transform: "translate(-0.100694 -0.154476) scale(0.00112483 0.00193254)",
    displayWidth: 891,
    displayHeight: 436,
  },
  {
    ...PresidentBush,
    id: "president_bush",
    alt: "President Bush, Oval Office, White House",
    transform: "translate(-0.578018 -0.0927808) scale(0.00342559 0.0024443)",
    displayWidth: 548,
    displayHeight: 708,
  },
  {
    ...SittingWithMadam,
    id: "sitting_with_madam",
    alt: "Sitting with Madam",
    transform: "translate(0 -0.123213) scale(0.00165563 0.00304428)",
    displayWidth: 891,
    displayHeight: 436,
  },
  // {
  //   ...PresidentMandela,
  //   id: "president_mandela",
  //   alt: "President Nelson Mandela, White House Visit",
  //   transform:
  //     "matrix(-8.72383e-06 -0.00218254 0.00155761 -9.17306e-06 -0.30674 1.66987)",
  //   displayWidth: 548,
  //   displayHeight: 463,
  // },
];

const imagePackThree = [
  {
    ...SittingWithMadam,
    id: "sitting_with_madam",
    alt: "Sitting with Madam",
    transform: "translate(0 -0.123213) scale(0.00165563 0.00304428)",
    displayWidth: 891,
    displayHeight: 436,
  },
  {
    ...PresidentMandela,
    id: "president_mandela",
    alt: "President Nelson Mandela, White House Visit",
    transform:
      "matrix(-8.72383e-06 -0.00218254 0.00155761 -9.17306e-06 -0.30674 1.66987)",
    displayWidth: 548,
    displayHeight: 463,
  },

  // {
  //   alt: "Commencement Speaker at Carnegie Mellon University-Africa in Kigali, Rwanda",
  // },
];

export function Gallery() {
  return (
    <Stack
      id="gallery"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:py-[clamp(4rem,6vw,6rem)] py-24",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <Group>
        <Stack className="gap-12">
          <Title className="text-3xl font-clash" order={2} weight={700}>
            GALLERY
          </Title>
          <Text className="leading-[40px] text-lg">
            We believe that our work is the best way to get to know us. These
            are our transformative work over the years. Showing you the
            extraordinary possibilities of your business is why we exist.
          </Text>
        </Stack>
      </Group>

      <Group></Group>
      <div
        style={{
          columns: "400px 2",
          columnGap: "40px",
          gap: "40px",
        }}
      >
        {imagePackTwoLeft.map((props, index) => (
          <Frame {...props} />
        ))}
      </div>
    </Stack>
  );
}
