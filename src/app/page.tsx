import VideoCard from "@/components/video-card";

interface Project {
  id: string;
  label: string;
  title: string;
  color: string;
}

// Inline SVG poster placeholders so the portfolio works out of the box.
// Replace `poster` and `src` with your own video files in /public/videos.
const poster = (color: string, text: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='monospace' font-size='24' letter-spacing='2' opacity='0.45'%3E${text}%3C/text%3E%3C/svg%3E`;

const projects: Project[] = [
  {
    id: "01",
    label: "Digital",
    title: "Ice Man",
    color: "0a0a0a",
  },
  {
    id: "02",
    label: "Digital",
    title: "Central Cee",
    color: "111111",
  },
  {
    id: "03",
    label: "Music Video",
    title: "Night Drive",
    color: "1a1a1a",
  },
  {
    id: "04",
    label: "Commercial",
    title: "Studio Session",
    color: "0f0f0f",
  },
  {
    id: "05",
    label: "Documentary",
    title: "On the Road",
    color: "141414",
  },
  {
    id: "06",
    label: "Digital",
    title: "After Hours",
    color: "0b0b0b",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 w-full relative pt-20 pb-32 px-6 md:pt-32 md:pb-40 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Video grid */}
          <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {projects.map((project) => (
              <VideoCard
                key={project.id}
                src="#"
                poster={poster(project.color, project.title.toUpperCase())}
                label={project.label}
                title={project.title}
              />
            ))}
          </div>

          {/* Page indicator (reference shows "01 - 29") */}
          <div className="mt-12 flex justify-between items-end">
            <span className="text-[10px] font-mono font-medium text-zinc-600 uppercase tracking-widest">
              Shipper · Portfolio
            </span>
            <span className="text-xs font-mono font-medium text-zinc-600 tracking-widest">
              01 - {projects.length.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
