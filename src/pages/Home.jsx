import { Outlet } from "react-router";

export default function Home() {
  return (
    <>
      <main>
        <h1>This is a homepage</h1>
      </main>
      <main>
        <Outlet />
      </main>
    </>
  );
}
