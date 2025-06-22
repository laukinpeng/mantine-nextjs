import AppShellLayout from "#/layouts/appShellLayout"
import SampleTable from "#/components/table";

export default function HomePage() {

  // import bellow use the use client 
  let data = 'test1'

  return (
    <AppShellLayout data={data}>
      <SampleTable />
    </AppShellLayout>
  )}
