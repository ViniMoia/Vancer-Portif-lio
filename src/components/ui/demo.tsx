import InfiniteGallery from "@/components/ui/3d-gallery-photography";

export default function DemoOne() {
  const sampleImages = [
    {
      src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
      alt: "Northern lights over scenic mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      alt: "Yosemite national park valley landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      alt: "Futuristic technology circuit texture",
    },
    {
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
      alt: "Vibrant abstract acrylic art paint explosion",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      alt: "Tropical paradise ocean waves",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
      alt: "Starry galaxy night sky above snowy peaks",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
      alt: "Misty pine forest morning fog",
    },
    {
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      alt: "Vintage 35mm photography camera lens",
    },
  ];

  return (
    <main className="relative min-h-screen h-screen w-full overflow-hidden bg-neutral-950 text-white select-none">
      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex flex-col items-center justify-center text-center px-4 mix-blend-exclusion text-white z-10">
        <h1 className="font-serif text-5xl md:text-8xl tracking-tight font-extralight drop-shadow-sm">
          <span className="italic">Vancer</span>
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase mt-4 text-white/80">
          
        </p>
      </div>

      <div className="text-center fixed bottom-8 left-0 right-0 font-mono uppercase text-[11px] font-medium tracking-wider pointer-events-none z-10 text-white/70">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-50 text-[10px] mt-1">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </main>
  );
}
