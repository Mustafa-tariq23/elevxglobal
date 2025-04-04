"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { teamMembersArray } from "../data/teamData"

// Remove the global hover state since we'll handle hover per card
export default function TeamSection() {
  const navigate = useNavigate()
  const stats = [
    { value: 10, label: "Years of Experience", suffix: "+" },
    { value: 50, label: "Project Completed", suffix: "+" },
    { value: 15, label: "Satisfied Clients", suffix: "+" },
    { value: 8, label: "Countries Served", suffix: "" },
    { value: 6, label: "Team Members", suffix: "" },
  ]

  const handleCardClick = (memberId) => {
    navigate(`/team/${memberId}`)
  }

  // Remove the teamMembers array and use teamMembersArray instead
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Stats Bar */}
      <div className="flex items-center justify-center">
        <div className="mb-16 w-full md:max-w-[900px] grid grid-cols-1 gap-4 rounded-xl bg-[#111827] p-4 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <CounterCard key={index} targetValue={stat.value} label={stat.label} suffix={stat.suffix} />
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
        <h2 className="mb-6 text-5xl font-bold text-[#23304d]">Our Team</h2>
        <p className="max-w-3xl text-center text-gray-600">
        At Elevex Global, our team is the backbone of our success. With a diverse group of skilled professionals, we bring innovation, expertise, and dedication to every project we undertake. Our talented team members specialize in software development, digital marketing, UI/UX design, ensuring high-quality solutions tailored to our clients' needs.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembersArray.map((member) => (
          <div 
            key={member.id}
            className="relative overflow-hidden rounded-lg bg-[#111827]"
          >
            <div className="aspect-square w-full">
              <img 
                src={member.image || "/placeholder.svg"} 
                alt={member.name} 
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 w-full p-4 text-center text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="mb-4">{member.role}</p>
                  <button 
                    onClick={() => handleCardClick(member.id)}
                    className="rounded-md bg-[#7b86e6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6470cc] transition-colors"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


function CounterCard({ targetValue, label, suffix = "" }) {
  const [count, setCount] = useState(0)
  const duration = 2000 // Animation duration in milliseconds

  useEffect(() => {
    // Don't animate if target is 0
    if (targetValue === 0) {
      setCount(0)
      return
    }

    // Calculate the increment step based on the target value and animation duration
    const incrementsPerSecond = 60
    const totalIncrements = (duration / 1000) * incrementsPerSecond
    const step = targetValue / totalIncrements

    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= targetValue) {
        setCount(targetValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / incrementsPerSecond)

    return () => clearInterval(timer)
  }, [targetValue])

  return (
    <div className="text-center py-2">
      <h3 className="text-xl font-bold md:text-xl lg:text-4xl">
        {count}
        {suffix}
      </h3>
      <p className="mt-2 text-sm md:text-sm">{label}</p>
    </div>
  )
}

