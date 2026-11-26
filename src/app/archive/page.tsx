"use client";

import { useMemo, useState } from "react";

type Kind = "Music" | "Commercial";
type ArchiveProject = { title: string; artist: string; duration: string; kind: Kind };

const projects: ArchiveProject[] = [
  { title: "Iceman", artist: "Central Cee", duration: "03:06", kind: "Music" },
  { title: "Villains", artist: "Trapstar", duration: "01:27", kind: "Music" },
  { title: "Aura for Aura", artist: "Blaqbonez", duration: "02:06", kind: "Music" },
  { title: "No Comment", artist: "Fredo", duration: "03:01", kind: "Music" },
  { title: "Trilogy", artist: "Kidwild", duration: "06:49", kind: "Music" },
  { title: "Pilates", artist: "Kairo Keyz", duration: "03:23", kind: "Music" },
  { title: "Century", artist: "Esdeekid", duration: "01:50", kind: "Music" },
  { title: "Birthday", artist: "Fredo", duration: "02:46", kind: "Music" },
  { title: "Son", artist: "Headie One", duration: "00:57", kind: "Music" },
  { title: "Bellingham", artist: "Headie One", duration: "02:41", kind: "Music" },
  { title: "Eight PM", artist: "Nemzzz", duration: "02:41", kind: "Music" },
  { title: "Geekin", artist: "Nafe Smallz", duration: "02:49", kind: "Music" },
  { title: "Cold", artist: "Nemzzz", duration: "02:23", kind: "Music" },
  { title: "Hooligan", artist: "Rushy", duration: "02:34", kind: "Music" },
  { title: "Iiatstu", artist: "Malevolence", duration: "06:19", kind: "Music" },
  { title: "No Introduction", artist: "Central Cee", duration: "02:54", kind: "Music" },
  { title: "Digos", artist: "Shiva", duration: "02:28", kind: "Music" },
  { title: "Sombrero", artist: "Blanco", duration: "03:35", kind: "Music" },
  { title: "Time Flies", artist: "Unknown T", duration: "03:23", kind: "Music" },
  { title: "Take What’s Yours", artist: "TwoTone", duration: "02:02", kind: "Music" },
  { title: "Whole Lotta", artist: "Valiant", duration: "02:45", kind: "Music" },
  { title: "Figura Publica", artist: "Veigh", duration: "02:18", kind: "Music" },
  { title: "Moi", artist: "Central Cee", duration: "02:55", kind: "Music" },
  { title: "Tipsy", artist: "Headie One", duration: "02:49", kind: "Music" },
  { title: "I Know", artist: "LeoStayTrill", duration: "02:15", kind: "Music" },
  { title: "L’s", artist: "Nemzzz", duration: "02:01", kind: "Music" },
  { title: "It’s Us", artist: "Nemzzz", duration: "01:58", kind: "Music" },
  { title: "PTSD", artist: "Nemzzz", duration: "02:15", kind: "Commercial" },
  { title: "Evicted", artist: "Nemzzz", duration: "02:41", kind: "Commercial" },
];

const filters = ["All", "Music", "Commercial"] as const;
type Filter = (typeof filters)[number];

export default function Archive() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState(0);
  const visible = useMemo(() => projects.map((project, index) => ({ ...project, index })).filter((project) => filter === "All" || project.kind === filter), [filter]);
  const active = projects[selected];

  return (
    <main className="archive-page">
      <div className="archive-heading"><span>DN—PRD / FILM INDEX</span><span>SELECT A FILM TO PREVIEW</span></div>
      <div className="archive-columns" aria-hidden="true"><span>PROJECT</span><span>ARTIST</span><span>RUNTIME</span></div>
      <div className="archive-layout">
        <div className="archive-table" role="list" aria-label="Film archive">
          {visible.map((project) => (
            <button className={`archive-row${selected === project.index ? " archive-row--active" : ""}`} key={project.title} role="listitem" onMouseEnter={() => setSelected(project.index)} onFocus={() => setSelected(project.index)} onClick={() => setSelected(project.index)}>
              <span className="archive-title"><i>[{String(project.index + 1).padStart(2, "0")}]</i>{project.title}</span>
              <span className="archive-artist">{project.artist}</span>
              <span className="archive-runtime">{project.duration}</span>
            </button>
          ))}
        </div>
        <div className={`archive-preview archive-preview--${selected % 4}`} aria-label={`Preview artwork for ${active.title}`}>
          <div className="archive-preview-frame" />
          <div className="archive-preview-top"><span>{String(selected + 1).padStart(2, "0")} / 29</span><span>{active.duration}</span></div>
          <div className="archive-preview-title"><span>{active.title}</span><i>▶</i></div>
          <div className="archive-preview-bottom"><span>{active.artist}</span><span>{active.kind.toUpperCase()}</span></div>
        </div>
      </div>
      <div className="archive-filters" aria-label="Filter archive">
        {filters.map((item) => (
          <button key={item} className={filter === item ? "archive-filter--active" : ""} onClick={() => setFilter(item)}>
            {item} <span>[{item === "All" ? "29" : item === "Music" ? "27" : "02"}]</span>
          </button>
        ))}
      </div>
      <div className="archive-colour-dot" aria-hidden="true"><i /><i /><i /></div>
    </main>
  );
}
