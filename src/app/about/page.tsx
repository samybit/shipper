export default function About() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 w-full pt-20 pb-32 px-6 md:pt-32 md:pb-40 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black font-stretched tracking-tighter mb-8 leading-none">
            About
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 mb-12">
            Shipper is a video production studio. We make work that moves —
            music videos, commercials, documentaries, and digital content.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest mb-4">
                Services
              </h2>
              <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                <li>Music videos</li>
                <li>Commercials</li>
                <li>Documentaries</li>
                <li>Digital content</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest mb-4">
                Based
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Cairo · London · Los Angeles
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
