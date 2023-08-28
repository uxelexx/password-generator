import Generator from "@/components/Generator";

export default function Home() {
  return (
    <main className="flex bg-gradient-to-b from-bg-start to-bg-end text-neutral-200 min-h-screen flex-col items-center justify-between p-24">
      <Generator />
    </main>
  );
}
