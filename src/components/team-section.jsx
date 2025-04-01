
export default function TeamSection() {
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "150+", label: "Project Completed" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "14+", label: "Awards & Achievements" },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Noah",
      role: "Web Developer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Emma",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Liam",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Stats Bar */}
      <div className="flex items-center justify-center ">
      <div className="mb-16 md:max-w-[800px] grid grid-cols-1 gap-6 rounded-xl bg-[#111827] p-4 text-white md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-bold md:text-xl lg:text-4xl">{stat.value}</h3>
            <p className="mt-2 text-sm md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

      {/* Team Section Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="mb-6 flex h-10 w-10 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
        <h2 className="mb-6 text-5xl font-bold">Our Team</h2>
        <p className="max-w-3xl text-center text-gray-600">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to
          fill empty spaces in a layout that do not yet have content.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative overflow-hidden rounded-lg bg-[#111827] pb-16">
            <div className="aspect-square w-full">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full bg-[#7b86e6]/80 p-4 text-center text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

