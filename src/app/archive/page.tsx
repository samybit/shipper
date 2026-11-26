import VideoCard from "@/components/video-card";

interface Project {
  id: string;
  label: string;
  title: string;
  color: string;
}

const poster = (color: string, text: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='monospace' font-size='24' letter-spacing='2' opacity='0.45'%3E${text}%3C/text%3E%3C/svg%3E`;

const projects: Project[] = [
  { id: "a1", label: "Digital", title: "Ice Man", color: "0a0a0a" },
  { id: "a2", label: "Digital", title: "Central Cee", color: "111111" },
  { id: "a3", label: "Music Video", title: "Night Drive", color: "1a1a1a" },
  { id: "a4", label: "Commercial", title: "Studio Session", color: "0f0f0f" },
  { id: "a5", label: "Documentary", title: "On the Road", color: "141414" },
  { id: "a6", label: "Digital", title: "After Hours", color: "0b0b0b" },
  { id: "a7", label: "Music Video", title: "Neon Nights", color: "121212" },
  { id: "a8", label: "Commercial", title: "Summer Drop", color: "0c0c0c" },
  { id: "a9", label: "Documentary", title: "Behind the Lens", color: "161616" },
  { id: "a10", label: "Digital", title: "City Lights", color: "0e0e0e" },
  { id: "a11", label: "Music Video", title: "Static", color: "131313" },
  { id: "a12", label: "Commercial", title: "Launch", color: "0d0d0d" },
];

export default function Archive() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 w-full pt-20 pb-32 px-6 md:pt-32 md:pb-40 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
            <h1 className="text-6xl md:text-8xl font-black font-stretched tracking-tighter leading-none">
              Archive
            </h1>
            <span className="text-xs font-mono font-medium text-zinc-600 uppercase tracking-widest">
              {projects.length} projects
            </span>
          </div>

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
        </div>
      </main>
    </div>
  );
}
