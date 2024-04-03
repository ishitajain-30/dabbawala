import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./Register.module.css";
import { useState } from "react";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
export default function AuthenticationImage() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Mumbai Dabbawala
        </Title>

        <TextInput label="Name" type="text" placeholder="Name" size="md" />
        <TextInput
          label="Phone Number"
          type="number"
          placeholder="+91 12345 67890"
          size="md"
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="hello@gmail.com"
          size="md"
        />
        <Text component="label" size="md" fw={500}>
          Type
        </Text>
        <div>
          <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={classes.control}
                data-expanded={opened || undefined}
              >
                <Group gap="xs">
                  <Image src={selected.image} width={22} height={22} />
                  <span className={classes.label}>{selected.label}</span>
                </Group>
                <IconChevronDown
                  size="1rem"
                  className={classes.icon}
                  stroke={1.5}
                />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
          </Menu>
        </div>

        <TextInput
          label="Quantity"
          type="number"
          placeholder="example 1, 2, 3..."
          size="md"
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            fw={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
