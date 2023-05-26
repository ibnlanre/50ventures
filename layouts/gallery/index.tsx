import OvalOffice from "./assets/oval_office_white_house_briefing.png";
import SecretaryCondolezzaRice from "./assets/secretary_condoleezza_rice.jpeg";
import HandShakeMeeting from "./assets/hand_shake_meeting.jpeg";
import PresidentBush from "./assets/president_bush.png";
import UNGeneralEmbassy from "./assets/un_general_embassy.jpeg";
import SittingWithMadam from "./assets/sitted_with_madam.jpeg";
import PresidentMandela from "./assets/president_mandela.png";

import Image from "next/image";

import { clsx, Stack, Text, Title } from "@mantine/core";
import { css } from "@emotion/css";

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
          "grid items-center clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10",
          "auto-cols-[1fr_auto] lg:grid-flow-col"
        )}
      >
        <Stack className="gap-12 min-[2235px]:min-w-[420px] xl:min-w-[24vw]">
          <Title className="text-3xl font-clash" order={2} weight={700}>
            GALLERY
          </Title>
          <Text
            data-aos="zoom-in"
            color="accent.4"
            className="leading-[40px] text-lg"
          >
            These images speak a thousand words on our impact and drive. We
            believe in delivering transformation through strategic initiatives
            that deploy innovative ideas alongside deep networks of valuable
            relationships. Sign on to unlock strategies and possibilities that
            set your business and projects apart.
          </Text>
        </Stack>

        <div
          className={clsx(
            "group relative rounded-3xl overflow-hidden lg:min-w-[45vw] xl:min-w-[15vw] self-end",
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
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]",
                "clump:text-[clamp(16px,2vw,20px)]"
              )}
            >
              Dr. Jendayi E. Frazer, and President George W. Bush, US Secretary
              of State Colin Powell, Vice President Richard Bruce Cheney, and US
              Trade Representative Robert B. Zoellick, Oval Office, White House
              Briefing.
            </Text>
          </div>
        </div>
      </section>

      <section
        className={clsx(
          "lg:auto-cols-[auto_1fr] md:grid-flow-col",
          "clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10",
          "grid items-center sm:grid-cols-2 lg:grid-cols-none"
        )}
      >
        <Stack className="clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10 h-full lg:max-w-[35vw] 2xl:max-w-[24vw]">
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
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]",
                  "clump:text-[clamp(16px,2vw,20px)]"
                )}
              >
                Dr. Jendayi E. Frazer, and President George W. Bush, at the Oval
                Office, White House.
              </Text>
            </div>
          </div>

          <div
            className={clsx(
              "group relative rounded-3xl overflow-hidden xl:min-w-[24vw]",
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
              fill
              alt="president ellen johnson-sirleaf"
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
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                  "text-white leading-[42px] font-medium text-xl w-10/12 mx-auto mb-[7%]",
                  "clump:text-[clamp(16px,2vw,20px)]"
                )}
              >
                Dr. Jendayi E. Frazer, and President Ellen Johnson-Sirleaf of
                Liberia meeting in Monrovia.
              </Text>
            </div>
          </div>
        </Stack>

        <Stack className="h-full clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10 min-[2360px]:min-w-[450px]">
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
              fill
              alt="president paul kagame"
              style={{
                objectFit: "cover",
                objectPosition: "center 5%",
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
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]",
                  "clump:text-[clamp(16px,2vw,20px)]"
                )}
              >
                Dr. Jendayi E. Frazer, and President Paul Kagame of Rwanda at
                the Munich Security Conference (March, 2022).
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
              blurDataURL={SecretaryCondolezzaRice.blurDataURL}
              src={SecretaryCondolezzaRice.src}
              fill
              alt=""
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
                  "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                  "text-white leading-[42px] font-medium  text-xl w-10/12 mx-auto mb-[7%]",
                  "clump:text-[clamp(16px,2vw,20px)]"
                )}
              >
                Ambassador Jendayi E. Frazer with Secretary Condoleezza Rice
                receiving the Secretary's Distinguished Service Medal, the
                highest award bestowed by the Secretary of State (January 2009).
              </Text>
            </div>
          </div>
        </Stack>
      </section>

      <section
        className={clsx(
          "lg:grid-cols-none lg:auto-cols-[1fr_auto] md:grid-flow-col",
          "clump:gap-[clamp(1rem,5vw,2.5rem)] gap-10 md:max-h-[400px]",
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
            src={UNGeneralEmbassy.src}
            blurDataURL={UNGeneralEmbassy.blurDataURL}
            fill
            alt="secretary"
            style={{
              objectFit: "cover",
              objectPosition: "top right",
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
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                "text-white leading-[42px] font-medium text-xl w-10/12 mx-auto mb-[7%]",
                "clump:text-[clamp(16px,2vw,20px)]"
              )}
            >
              Dr. Jendayi E. Frazer, at the USUN Embassy during the UN General
              Assembly with President George W. Bush, Secretary of State Colin
              Powell, National Security Advisor Condoleezza Rice, Chief of Staff
              Andy Card, USUN Ambassador John Negroponte, and US Ambassador to
              Uganda Martin Brennan.
            </Text>
          </div>
        </div>

        <div
          className={clsx(
            "lg:max-w-[35vw] min-[1440px]:max-w-[25vw] h-full group relative rounded-3xl overflow-hidden",
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
                "clump:leading-[clamp(1.3rem,2.5vw,2.5rem)] sm:clump:text-[clamp(14px,2vw,20px)]",
                "text-white leading-[42px] font-medium text-xl w-10/12 mx-auto mb-[7%]",
                "clump:text-[clamp(16px,2vw,20px)]"
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
