"use client";

import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";

export default function AppShellLayout({ data }: { data: any }) {
  const [opened, { toggle }] = useDisclosure();

  console.log('datadatadata', data)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <h1>Server Data</h1>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div>{data}dasnhjkjlashkjdlhasklj</div>
      </AppShell.Main>
    </AppShell>
  );
}