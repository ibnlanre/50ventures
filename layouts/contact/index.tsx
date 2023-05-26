import {
  Box,
  Button,
  clsx,
  Group,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";

import * as Yup from "yup";
import Link from "next/link";

import Contour from "./assets/contour.png";
import Texture from "./assets/texture.png";

export function Contact() {
  const contactForm = useForm<{
    first_name: string;
    last_name: string;
    email: string;
    contact_category: string;
    message: string;
  }>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact_category: "",
      message: "",
    },
    validate: yupResolver(
      Yup.object().shape({
        first_name: Yup.string().required("A first name is required"),
        last_name: Yup.string().notRequired(),
        email: Yup.string()
          .email("Input a valid email")
          .required("Please fill in your email"),
        contact_category: Yup.string()
          .oneOf(["General", "Complaints", "Enquiry"], "Selection is invalid")
          .optional(),
        message: Yup.string().required("Write out your message"),
      })
    ),
  });

  function handleSubmit() {}

  return (
    <Stack
      className={clsx(
        "max-w-screen-xl mx-auto overflow-hidden",
        "clump:py-[clamp(6rem,12vw,12rem)] py-48",
        "clump:px-[clamp(5px,5vw,5rem)] px-20",
        "clump:gap-[clamp(3rem,7vw,7rem)] gap-28"
      )}
    >
      <div
        className={clsx(
          "clump:gap-[clamp(3rem,7vw,7rem)] gap-28",
          "flex sm:hidden flex-col justify-center h-full"
        )}
      >
        <Title className="text-[40px] font-bold font-clash">Contact Us</Title>
        <Stack className="text-lg" spacing="md">
          <Text className="grid gap-3 text-accent-40">
            Please fill the form to reach us for more enquiries
          </Text>
        </Stack>
      </div>
      <section
        style={{
          backgroundColor: "#EFF5FC",
          backgroundImage: `url(${Texture.src}), url(${Contour.src})`,
          backgroundSize: "contain, cover",
          backgroundBlendMode: "screen",
        }}
        className={clsx(
          "grid items-center rounded-3xl",
          "clump:p-[clamp(1rem,5vw,5rem)] p-20",
          "grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]",
          "clump:gap-[clamp(4rem,5vw,9rem)] gap-36"
        )}
      >
        <div
          className={clsx(
            "clump:gap-[clamp(3rem,7vw,7rem)] gap-28",
            "hidden sm:flex flex-col justify-center h-full"
          )}
        >
          <Title className="text-[40px] font-bold font-clash">Contact Us</Title>
          <Stack className="text-lg" spacing="md">
            <Text className="grid gap-3 text-accent-40">
              Please fill the form to reach us for more enquiries
            </Text>
          </Stack>
        </div>

        <Box
          onSubmit={contactForm.onSubmit(handleSubmit)}
          component="form"
          className={clsx(
            "clump:py-[clamp(2rem,4vw,4rem)] py-16",
            "clump:px-[clamp(1rem,2.5vw,2.5rem)] px-10",
            "bg-white rounded-3xl"
          )}
        >
          <Stack spacing={25}>
            <Stack spacing="sm">
              <Input.Label>First Name</Input.Label>
              <TextInput
                size="md"
                placeholder="First name"
                {...contactForm.getInputProps("first_name")}
              />
            </Stack>
            <Stack spacing="sm">
              <Input.Label>Last Name</Input.Label>
              <TextInput
                size="md"
                placeholder="Last name"
                {...contactForm.getInputProps("last_name")}
              />
            </Stack>
            <Stack spacing="sm">
              <Input.Label>Email</Input.Label>
              <TextInput
                size="md"
                placeholder="Your Email"
                {...contactForm.getInputProps("email")}
              />
            </Stack>
            <Stack spacing="sm">
              <Input.Label>Contact Category</Input.Label>
              <Select
                size="md"
                placeholder="Select a category"
                data={["General", "Enquiry", "Complaint"]}
                {...contactForm.getInputProps("contact_category")}
              />
            </Stack>
            <Stack spacing="sm">
              <Input.Label>Message</Input.Label>
              <Textarea
                size="md"
                placeholder="Add Message"
                {...contactForm.getInputProps("email")}
              />
            </Stack>
          </Stack>
          <Group mt={40}>
            <Button type="submit" className="ml-auto text-white stripe">
              Submit
            </Button>
          </Group>
        </Box>
      </section>
    </Stack>
  );
}
