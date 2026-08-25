const contributors = [
  {
    name: "Delilah Lopez",
    role: "Creator & Maintainer",
    github: "https://github.com/DLopez43",
    linkedin: "#",
  },
  {
    name: "Lawrenzo Lue",
    role: "Maintainer",
    github: "https://github.com/lawrenzo456/",
    linkedin: "#",
  },
  {
    name: "Rose Raposo",
    role: "Maintainer",
    github: "https://github.com/rrap1",
    linkedin: "#",
  },
  {
    name: "Hyeyoon (Elaine) Sung",
    role: "Creator & Maintainer",
    github: "https://github.com/shy-blue-sky",
    linkedin: "#",
  },
  {
    name: "Katy Wells",
    role: "Creator & Maintainer",
    github: "https://github.com/katygus",
    linkedin: "#",
  },
  {
    name: "Sofia Rodas",
    role: "Creator",
    github: "https://github.com/sofiso99",
    linkedin: "#",
  },
  {
    name: "Stormi Stearns",
    role: "Creator",
    github: "https://github.com/stormi25-cell",
    linkedin: "#",
  }
];

const Contributors = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-card/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-muted-foreground">
            Built with ❤️ by these amazing developers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 ">
          {contributors.map((c) => (
            <div key={c.name} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent flex items-center justify-center text-2xl group-hover:animate-wiggle">
                🦦
              </div>
              <h3 className="font-semibold text-sm">{c.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.role}</p>
              <div className="flex justify-center gap-2">
                <a
                  href={c.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
