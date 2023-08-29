import Generator from "@/components/Generator";

export default function Home() {
  return (
    <main className="grid place-items-center bg-gradient-to-b from-bg-start to-bg-end text-neutral-100 min-h-screen flex-col p-4 md:p-24">
      <Generator />
    </main>
  );
}
