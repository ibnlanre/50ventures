import { LogoCurrentColor } from "@/components";
import { clsx, Divider, Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

function Facebook() {
  return (
    <svg
      width="13"
      height="22"
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4363 3.65022H7.84765C7.18697 3.65022 6.65142 4.1858 6.65142 4.84645V8.43514H11.4363C11.5724 8.43213 11.7014 8.49543 11.7823 8.60489C11.8632 8.71435 11.8859 8.85622 11.8431 8.98541L10.9579 11.6171C10.8763 11.8586 10.6505 12.0219 10.3956 12.0238H6.65142V20.9956C6.65142 21.3259 6.38358 21.5937 6.0533 21.5937H3.06272C2.7324 21.5937 2.46461 21.3259 2.46461 20.9956V12.0238H0.670259C0.339932 12.0238 0.0721436 11.756 0.0721436 11.4257V9.03326C0.0721436 8.70298 0.339932 8.43514 0.670259 8.43514H2.46461V4.84645C2.46461 2.20381 4.60694 0.0615234 7.24953 0.0615234H11.4363C11.7666 0.0615234 12.0345 0.329312 12.0345 0.659639V3.0521C12.0345 3.38243 11.7666 3.65022 11.4363 3.65022Z"
        fill="white"
      />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9026 0.0615234H6.33272C3.02942 0.0615234 0.351562 2.73938 0.351562 6.04268V15.6125C0.351562 18.9158 3.02942 21.5937 6.33272 21.5937H15.9026C19.2058 21.5937 21.8837 18.9158 21.8837 15.6125V6.04268C21.8837 2.73938 19.2058 0.0615234 15.9026 0.0615234ZM19.7903 15.6125C19.7837 17.7569 18.0469 19.4937 15.9026 19.5003H6.33272C4.1883 19.4937 2.45154 17.7569 2.44497 15.6125V6.04268C2.45154 3.89826 4.1883 2.1615 6.33272 2.15493H15.9026C18.0469 2.1615 19.7837 3.89826 19.7903 6.04268V15.6125ZM16.7997 6.34174C17.4604 6.34174 17.996 5.80616 17.996 5.14551C17.996 4.48485 17.4604 3.94928 16.7997 3.94928C16.1391 3.94928 15.6035 4.48485 15.6035 5.14551C15.6035 5.80616 16.1391 6.34174 16.7997 6.34174ZM11.1176 5.44457C8.14468 5.44457 5.7346 7.85464 5.7346 10.8276C5.7346 13.8006 8.14468 16.2107 11.1176 16.2107C14.0906 16.2107 16.5007 13.8006 16.5007 10.8276C16.5039 9.39895 15.9377 8.02791 14.9275 7.01771C13.9173 6.0075 12.5463 5.44138 11.1176 5.44457ZM7.82801 10.8276C7.82801 12.6444 9.30081 14.1172 11.1176 14.1172C12.9345 14.1172 14.4073 12.6444 14.4073 10.8276C14.4073 9.01077 12.9345 7.53797 11.1176 7.53797C9.30081 7.53797 7.82801 9.01077 7.82801 10.8276Z"
        fill="white"
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9155 3.508C21.3599 4.24908 20.6884 4.89554 19.9267 5.4224C19.9267 5.61598 19.9267 5.80957 19.9267 6.01392C19.9328 9.52947 18.5286 12.9004 16.0288 15.3711C13.5289 17.8418 10.1426 19.2055 6.62911 19.1565C4.59783 19.1633 2.59257 18.6995 0.770407 17.8014C0.672148 17.7585 0.608784 17.6613 0.609154 17.554V17.4357C0.609154 17.2813 0.734292 17.1562 0.888654 17.1562C2.88534 17.0902 4.8108 16.398 6.3926 15.1772C4.58532 15.1408 2.95924 14.0701 2.21088 12.4239C2.1731 12.334 2.18485 12.2308 2.24195 12.1517C2.29903 12.0727 2.39319 12.0291 2.49038 12.0368C3.03966 12.0919 3.59442 12.0408 4.12438 11.8862C2.12929 11.472 0.630196 9.81573 0.415652 7.78847C0.408032 7.69122 0.451611 7.59707 0.530658 7.53989C0.609693 7.48283 0.712772 7.47099 0.802657 7.50891C1.33804 7.74517 1.916 7.86958 2.50114 7.87448C0.752965 6.72713 -0.00213201 4.54471 0.662901 2.56156C0.731553 2.36886 0.896477 2.2265 1.09707 2.18681C1.29766 2.1471 1.50434 2.21592 1.64114 2.36797C4.0002 4.8787 7.24157 6.37484 10.6818 6.54091C10.5937 6.18929 10.5504 5.82792 10.5528 5.46541C10.585 3.5646 11.7611 1.87132 13.5306 1.1783C15.2999 0.485285 17.3125 0.929674 18.6261 2.30344C19.5213 2.13287 20.3869 1.83213 21.1952 1.41077C21.2544 1.37381 21.3295 1.37381 21.3888 1.41077C21.4257 1.47001 21.4257 1.54512 21.3888 1.60436C20.9972 2.50091 20.3358 3.25286 19.4968 3.75536C20.2315 3.67016 20.9533 3.49683 21.6468 3.23913C21.7052 3.19939 21.7818 3.19939 21.8402 3.23913C21.8891 3.2615 21.9257 3.30429 21.9402 3.3561C21.9547 3.40791 21.9456 3.46347 21.9155 3.508Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.87257 0.0615234H19.6198C20.9412 0.0615234 22.0123 1.13267 22.0123 2.45399V19.2012C22.0123 20.5226 20.9412 21.5937 19.6198 21.5937H2.87257C1.55124 21.5937 0.480103 20.5226 0.480103 19.2012V2.45399C0.480103 1.13267 1.55124 0.0615234 2.87257 0.0615234ZM6.46126 18.005C6.79159 18.005 7.05938 17.7372 7.05938 17.4069V9.03326C7.05938 8.70298 6.79159 8.43514 6.46126 8.43514H4.66691C4.33659 8.43514 4.0688 8.70298 4.0688 9.03326V17.4069C4.0688 17.7372 4.33659 18.005 4.66691 18.005H6.46126ZM5.56409 7.23891C4.57309 7.23891 3.76974 6.43556 3.76974 5.44457C3.76974 4.45357 4.57309 3.65022 5.56409 3.65022C6.55508 3.65022 7.35843 4.45357 7.35843 5.44457C7.35843 6.43556 6.55508 7.23891 5.56409 7.23891ZM17.8255 18.005C18.1557 18.005 18.4236 17.7372 18.4236 17.4069V11.9042C18.4625 10.0032 17.057 8.38074 15.1698 8.14805C13.8504 8.02753 12.572 8.64377 11.8443 9.751V9.03326C11.8443 8.70298 11.5765 8.43514 11.2462 8.43514H9.45184C9.12156 8.43514 8.85372 8.70298 8.85372 9.03326V17.4069C8.85372 17.7372 9.12156 18.005 9.45184 18.005H11.2462C11.5765 18.005 11.8443 17.7372 11.8443 17.4069V12.921C11.8443 11.9301 12.6477 11.1267 13.6387 11.1267C14.6296 11.1267 15.433 11.9301 15.433 12.921V17.4069C15.433 17.7372 15.7008 18.005 16.0311 18.005H17.8255Z"
        fill="white"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <Stack spacing={0} id="footer" className="text-white bg-accent-70 ">
      <Group
        className={clsx(
          "max-w-screen-xl mx-auto w-full justify-between",
          "clump:py-[clamp(3rem,4vw,4rem)] py-16",
          "clump:px-[clamp(5px,5vw,5rem)] px-20"
        )}
      >
        <Stack>
          <LogoCurrentColor className="text-white" />
          <Stack>
            <ul className="pl-0 list-none">
              <li>3213 Duke St. #624 Alexandria, VA 22314</li>
              <li>(270) 555-0117</li>
              <li>info@50ventures.com</li>
            </ul>
          </Stack>
          <Group>
            <Link target="_blank" href="https://www.twitter.com/50ventures">
              <Twitter />
            </Link>
          </Group>
        </Stack>
        <Stack spacing="sm">
          <Title className="text-xl leading-[150%]" weight={700} order={5}>
            Links
          </Title>

          <Stack className="w-[260px]" spacing="xs">
            <a className="text-white no-underline" href="#home">
              Home
            </a>
            <a className="text-white no-underline" href="#leadership">
              Leadership
            </a>
            <a className="text-white no-underline" href="#about">
              About
            </a>
            <a className="text-white no-underline" href="#projects">
              Projects
            </a>
            <a className="text-white no-underline" href="#partners">
              Partners
            </a>
          </Stack>
        </Stack>
      </Group>

      <Divider color="white" />

      <Group
        className={clsx(
          "max-w-screen-xl mx-auto w-full justify-between",
          "clump:py-[clamp(1rem,2vw,2rem)] py-8",
          "clump:px-[clamp(5px,5vw,5rem)] px-20"
        )}
      >
        <Text>
          &copy; 50Ventures {new Date().getFullYear()}, All right reserved.
        </Text>
        <Group ml="auto" position="apart">
          <Text>Privacy Policy</Text>
          <Text>Terms of Service</Text>
        </Group>
      </Group>
    </Stack>
  );
}
