import { useParams } from "react-router-dom";
import Header from "./HeaderForPages";
import Footer from "./Footer";
import { teamMembersData } from "../data/teamData";
import NotFound from "./NotFound";

export default function TeamMemberProfile() {
  const { id } = useParams();

  // Use the shared teamMembersData
  const member = teamMembersData[id];

  if (!member) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header heading={member.name} para={`${member.role} at Elevex Global`} />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Image */}
            <div className="rounded-full overflow-hidden w-full aspect-square max-w-md mx-auto">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-blue-600 font-medium tracking-wide uppercase">
                  {member.role}
                </h3>
                {/* <h1 className="text-4xl font-bold text-gray-900">
                  {member.name}
                </h1> */}
                <p className="text-gray-700 leading-relaxed">{member.intro}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Professional Skills
                </h2>
                <div className="space-y-4">
                  {Object.entries(member.skills).map(([skill, percentage]) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">{skill}</span>
                        <span className="text-gray-700">{percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
