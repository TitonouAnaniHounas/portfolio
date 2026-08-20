import Reveal from "../components/Reveal";

const TECHS = [
  {
    name: "HTML",
    slug: "html5",
    color: "E34F26",
  },
  {
    name: "CSS",
    slug: "css",
    color: "1572B6",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    color: "F7DF1E",
  },
  {
    name: "React",
    slug: "react",
    color: "61DAFB",
  },
  {
    name: "PHP",
    slug: "php",
    color: "777BB4",
  },
  {
    name: "Tailwind CSS",
    slug: "tailwindcss",
    color: "38BDF8",
  },
  {
    name: "MySQL / SQL",
    slug: "mysql",
    color: "4479A1",
  },
  {
    name: "Git",
    slug: "git",
    color: "F05032",
  },
  {
    name: "GitHub",
    slug: "github",
    color: "FFFFFF",
  },
  {
    name: "Vite",
    slug: "vite",
    color: "646CFF",
  },
];

export default function TechStackTab() {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-5
      "
    >

      {TECHS.map(({ name, slug, color }, i) => (
        <Reveal
          key={name}
          delay={i * 70}
          variant="scale"
          duration={600}
        >
          <div
            className="
              group

              flex flex-col
              items-center
              gap-3

              bg-card
              border border-white/10
              rounded-2xl

              py-8 px-4

              transition-all duration-500

              hover:border-accent/40
              hover:-translate-y-2
              hover:bg-white/[0.06]

              hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
            "
          >

            <img
              src={`https://cdn.simpleicons.org/${slug}/${color}`}
              alt={name}
              width={40}
              height={40}
              className="
                transition-all
                duration-500

                group-hover:scale-110
                group-hover:-rotate-3
              "
            />

            <span className="text-text text-sm font-medium text-center">
              {name}
            </span>

          </div>
        </Reveal>
      ))}

      {/* VISUAL BASIC */}
      <Reveal
        delay={TECHS.length * 70}
        variant="scale"
        duration={600}
      >
        <div
          className="
            group

            flex flex-col
            items-center
            gap-3

            bg-card
            border border-white/10
            rounded-2xl

            py-8 px-4

            transition-all duration-500

            hover:border-accent/40
            hover:-translate-y-2
            hover:bg-white/[0.06]
          "
        >
          <div
            className="
              w-10 h-10
              rounded-lg

              flex
              items-center
              justify-center

              font-bold
              text-sm

              transition-transform
              duration-500

              group-hover:scale-110
              group-hover:rotate-3
            "
            style={{
              backgroundColor: "#945DD61A",
              color: "#945DD6",
              border: "1px solid #945DD640",
            }}
          >
            VB
          </div>

          <span className="text-text text-sm font-medium text-center">
            Visual Basic
          </span>
        </div>
      </Reveal>

    </div>
  );
}