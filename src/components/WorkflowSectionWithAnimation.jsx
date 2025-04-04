import { useEffect, useState } from "react";
import { Globe, PenTool, Settings, MessageSquare, Rocket } from "lucide-react";

export default function WorkflowSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const workflowSteps = [
    {
      id: "01",
      title: "Understanding Your Audience",
      description:
        "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      id: "02",
      title: "Planning & Sketching",
      description:
        "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <PenTool className="h-6 w-6 text-white" />,
    },
    {
      id: "03",
      title: "Customization Process",
      description:
        "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <Settings className="h-6 w-6 text-white" />,
    },
    {
      id: "04",
      title: "User Testing & Feedback",
      description:
        "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
    },
    {
      id: "05",
      title: "Product Launch",
      description:
        "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <Rocket className="h-6 w-6 text-white" />,
    },
  ];

  // Function to render a workflow card
  const renderCard = (step) => (
    <div className="bg-white text-black rounded-lg p-6 py-10 shadow-lg ">
      <div className="flex items-center mb-4">
        <div className="bg-blue-600 rounded-full p-3 mr-3">{step.icon}</div>
        <div className="text-5xl font-bold text-gray-300">{step.id}</div>
      </div>
      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-gray-700 text-sm">{step.description}</p>
    </div>
  );

  return (
    <section className="relative bg-black text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:left-20">
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20L20 0L40 20L60 0L80 20"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 md:left-20">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L40 20L0 40V0Z" fill="white" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-10 right-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 0V40M0 20H40" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">WORKFLOW</h2>
        <p className="text-gray-400">
          We follow a structured and efficient workflow to
          deliver high-quality solutions tailored to your business needs. Our
          process ensures optimal user experience customization, and seamless
          execution at every stage. Our streamlined workflow ensures efficiency,
          adaptability, and long-term success for your projects. Whether
          it&#39;s IT services, software development, or digital solutions, we
          guarantee a results-driven approach.
        </p>
      </div>

      {/* Mobile View - List */}
      {isMobile && (
        <div className="space-y-6">
          {workflowSteps.map((step) => (
            <div
              key={step.id}
              className="bg-black border border-gray-800 rounded-lg p-6 flex items-start"
            >
              <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-grow">
                <div className="text-5xl font-bold text-gray-500 mb-2">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Desktop/Laptop View - Three-column layout */}
      {!isMobile && (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1: Two cards stacked vertically */}
            <div className="space-y-12">
              {renderCard(workflowSteps[0])}
              {renderCard(workflowSteps[1])}
            </div>

            {/* Column 2: Image spanning two cards height + card below */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden aspect-[3/4] mb-6">
                <img
                  // src="/placeholder.svg?height=600&width=450"
                  src="images/person-with-tablet.jpeg"
                  alt="Professional with tablet"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {renderCard(workflowSteps[4])}
            </div>

            {/* Column 3: Two cards stacked vertically (mirroring column 1) */}
            <div className="space-y-12">
              {renderCard(workflowSteps[2])}
              {renderCard(workflowSteps[3])}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
