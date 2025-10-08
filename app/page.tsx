import Hero from '@/components/Hero';
import DragonGallery from '@/components/DragonGallery';
import DragonFacts from '@/components/DragonFacts';
import JoinGuild from '@/components/JoinGuild';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <DragonGallery />
      <DragonFacts />
      <JoinGuild />
    </main>
  );
}
