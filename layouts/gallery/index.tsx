import OvalOffice from "./assets/oval_office_white_house_briefing.png";
import CorporateCouncil from "./assets/corporate_council_on_africa.jpeg";
import HandShakeMeeting from "./assets/hand_shake_meeting.jpeg";
import PresidentBush from "./assets/president_bush.png";
import SouthSudanPresident from "./assets/south_sudan_president.jpg";
import SittingWithMadam from "./assets/sitted_with_madam.jpeg";
import PresidentMandela from "./assets/president_mandela.png";
import CarnegieMellon from "./assets/carnegie_mellon_university.jpg";

import Image from "next/image";

import { clsx, Stack, Text, Title } from "@mantine/core";
import { css } from "@emotion/css";

const imagePack = [
  {
    ...OvalOffice,
    id: "oval_office",
    alt: "Bush, Secretary Powell, Vice President Cheney, and US Trade Representative Zoellick, Oval Office, White House Briefing",
    transform:
      "translate(-0.1156px, -0.410383px) scale(0.00187109px, 0.00360074px)",
    displayWidth: 891,
    displayHeight: 463,
  },
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
  {
    ...PresidentMandela,
    id: "president_mandela",
    alt: "President Nelson Mandela, White House Visit",
    transform:
      "matrix(-8.72383e-06 -0.00218254 0.00155761 -9.17306e-06 -0.30674 1.66987)",
    displayWidth: 548,
    displayHeight: 463,
  },
];

export function Gallery() {
  return (
    <Stack
      id="gallery"
      className={clsx(
        "max-w-screen-xl mx-auto",
        "clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10",
        "clump:py-[clamp(5rem,9vw,9rem)] py-36",
        "clump:px-[clamp(5px,5vw,5rem)] px-20"
      )}
    >
      <section
        className={clsx(
          "grid items-center auto-cols-[auto_1fr] lg:grid-flow-col",
          "clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10"
        )}
      >
        <Stack className="gap-12 lg:max-w-[35vw] xl:max-w-[25vw]">
          <Title className="text-3xl font-clash" order={2} weight={700}>
            GALLERY
          </Title>
          <Text data-aos="zoom-in" color="accent.4" className="leading-[40px] text-lg">
            These images speak a thousand words on our impact and drive. We
            believe in delivering transformation through strategic initiatives
            that deploy innovative ideas alongside deep networks of valuable
            relationships. Sign on to unlock strategies and possibilities that
            set your business and projects apart.
          </Text>
        </Stack>

        <div
          className={clsx(
            "group relative rounded-3xl overflow-hidden",
            css({
              filter: "grayscale(1)",
              "&:hover": {
                filter: "none",
              },
            })
          )}
        >
          <Image
            placeholder="blur"
            className="rounded-3xl !relative"
            blurDataURL={OvalOffice.blurDataURL}
            src={OvalOffice.src}
            alt="the oval office"
            data-aos="fade-up"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "0 5%",
            }}
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
            }}
            className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
          >
            <Text
              className={clsx(
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
              )}
            >
              Dr. Jendayi E. Frazer, and President George W. Bush, Former U.S
              Secretary of State Colin Powell, Vice President Richard Bruce
              Cheney, and US Trade Representative Robert B. Zoellick, Oval
              Office, White House Briefing.
            </Text>
          </div>
        </div>
      </section>

      <section
        className={clsx(
          "lg:grid-cols-none lg:auto-cols-[auto_1fr] md:grid-flow-col",
          "clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10",
          "grid items-center sm:grid-cols-2"
        )}
      >
        <Stack className="clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10 h-full lg:max-w-[35vw] xl:max-w-[25vw]">
          <div
            className={clsx(
              "group relative rounded-3xl overflow-hidden",
              css({
                filter: "grayscale(1)",
                "&:hover": {
                  filter: "none",
                },
              })
            )}
          >
            <Image
              placeholder="blur"
              className="rounded-3xl !relative"
              blurDataURL={CorporateCouncil.blurDataURL}
              src={CorporateCouncil.src}
              data-aos="fade-up"
              fill
              alt="presiden samia suhulu hassan"
              style={{
                objectFit: "cover",
                objectPosition: "0 5%",
              }}
            />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
              }}
              className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
            >
              <Text
                className={clsx(
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
                )}
              >
                Dr. Jendayi E. Frazer, and President Samia Suhulu Hassan of
                Tanzania in DC 2022.
              </Text>
            </div>
          </div>
          <div
            className={clsx(
              "flex-1 h-full group relative rounded-3xl overflow-hidden",
              css({
                filter: "grayscale(1)",
                "&:hover": {
                  filter: "none",
                },
              })
            )}
          >
            <Image
              placeholder="blur"
              className="rounded-3xl !relative"
              blurDataURL={PresidentBush.blurDataURL}
              src={PresidentBush.src}
              data-aos="fade-up"
              fill
              alt="president george w. bush"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
              }}
              className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
            >
              <Text
                className={clsx(
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
                )}
              >
                Dr. Jendayi E. Frazer, and President George W. Bush, at the Oval
                Office, White House.
              </Text>
            </div>
          </div>
        </Stack>

        <Stack className="h-full clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10">
          <div
            className={clsx(
              "flex-1 h-full group relative rounded-3xl overflow-hidden",
              css({
                filter: "grayscale(1)",
                "&:hover": {
                  filter: "none",
                },
              })
            )}
          >
            <Image
              placeholder="blur"
              className="rounded-3xl !relative"
              src={HandShakeMeeting.src}
              blurDataURL={HandShakeMeeting.blurDataURL}
              data-aos="fade-up"
              fill
              alt="president paul kagame"
              style={{
                objectFit: "cover",
                objectPosition: "0 5%",
              }}
            />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
              }}
              className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
            >
              <Text
                className={clsx(
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
                )}
              >
                Dr. Jendayi E. Frazer, and President Paul Kagame of Rwanda at
                the Munich Security Conference (March, 2022)
              </Text>
            </div>
          </div>
          <div
            className={clsx(
              "group relative rounded-3xl overflow-hidden",
              css({
                filter: "grayscale(1)",
                "&:hover": {
                  filter: "none",
                },
              })
            )}
          >
            <Image
              placeholder="blur"
              className="rounded-3xl !relative"
              src={SouthSudanPresident.src}
              blurDataURL={SouthSudanPresident.blurDataURL}
              data-aos="fade-up"
              fill
              alt="president salva kiir"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
              }}
              className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
            >
              <Text
                className={clsx(
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
                )}
              >
                Dr. Jendayi E. Frazer, with President Salva Kiir Mayardit of
                Sudan at State House, Juba, South Sudan .
              </Text>
            </div>
          </div>
        </Stack>
      </section>

      <section
        className={clsx(
          "lg:grid-cols-none lg:auto-cols-[1fr_auto] md:grid-flow-col",
          "clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10",
          "grid items-center sm:grid-cols-2"
        )}
      >
        <div
          className={clsx(
            "h-full group relative rounded-3xl overflow-hidden",
            css({
              filter: "grayscale(1)",
              "&:hover": {
                filter: "none",
              },
            })
          )}
        >
          <Image
            placeholder="blur"
            className="rounded-3xl !relative"
            blurDataURL={SittingWithMadam.blurDataURL}
            src={SittingWithMadam.src}
            data-aos="fade-up"
            fill
            alt="presiden ellen johnson-sirleaf"
            style={{
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
            }}
            className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
          >
            <Text
              className={clsx(
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
              )}
            >
              Dr. Jendayi E. Frazer, and President Ellen Johnson-Sirleaf of
              Liberia meeting in Monrovia.
            </Text>
          </div>
        </div>

        <div
          className={clsx(
            "lg:max-w-[35vw] h-full group relative rounded-3xl overflow-hidden",
            css({
              filter: "grayscale(1)",
              "&:hover": {
                filter: "none",
              },
            })
          )}
        >
          <Image
            placeholder="blur"
            alt="president mandela"
            src={PresidentMandela.src}
            className="rounded-3xl !relative"
            blurDataURL={PresidentMandela.blurDataURL}
            data-aos="fade-up"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(173.35deg, rgba(0, 0, 0, 0.13) 30.14%, rgba(0, 0, 0, 0.6) 48.45%, rgba(0, 0, 0, 0.86) 66.65%)",
            }}
            className="absolute top-0 content-end hidden w-full h-full group-hover:grid"
          >
            <Text
              className={clsx(
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] clump:text-[clamp(16px,2vw,20px)]",
                "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]"
              )}
            >
              Dr. Jendayi E. Frazer, and Nelson Mandela of South Africa in DC.
            </Text>
          </div>
        </div>
      </section>
    </Stack>
  );
}
