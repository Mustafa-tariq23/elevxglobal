import React from 'react';
import { Globe, PenTool, Settings, BarChart3, Rocket } from 'lucide-react';

// Workflow step data structure for easy customization
const defaultWorkflowSteps = [
  {
    id: 1,
    number: '01',
    title: 'Understanding Your Audience',
    description: 'Analyzing market trends and customer demographics to tailor your product or service.',
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 2,
    number: '02',
    title: 'Planning & Sketching',
    description: 'Analyzing market trends and customer demographics to tailor your product or service.',
    icon: <PenTool className="h-6 w-6" />
  },
  {
    id: 3,
    number: '03',
    title: 'Customization Process',
    description: 'Analyzing market trends and customer demographics to tailor your product or service.',
    icon: <Settings className="h-6 w-6" />
  },
  {
    id: 4,
    number: '04',
    title: 'User Testing & Feedback',
    description: 'Analyzing market trends and customer demographics to tailor your product or service.',
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    id: 5,
    number: '05',
    title: 'Product Launch',
    description: 'Analyzing market trends and customer demographics to tailor your product or service.',
    icon: <Rocket className="h-6 w-6" />
  }
];

/**
 * WorkflowSection Component
 * 
 * A responsive component that displays a workflow process with steps arranged around a central image.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The main title of the workflow section
 * @param {string} props.description - The description text below the title
 * @param {string} props.imageSrc - The source URL for the central image
 * @param {string} props.imageAlt - Alt text for the central image
 * @param {Array} props.steps - Array of workflow steps (optional, will use default if not provided)
 * @param {string} props.footerText - Text to display in the footer
 * @param {string} props.highlightedText - Text to highlight in the footer
 * @param {string} props.backgroundColor - Background color for the section (optional)
 * @param {string} props.textColor - Text color for the section (optional)
 * @param {string} props.accentColor - Accent color for icons and highlights (optional)
 */
const WorkflowSection = ({
  title = "WORKFLOW",
  description = "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.",
  imageSrc = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-27%20at%209.25.43%20PM-BN9esbOoUsmECluRhaudpz608srt1O.png",
  imageAlt = "Person working on a project",
  steps = defaultWorkflowSteps,
  footerText = "I'm currently looking to join a",
  highlightedText = "cross-functional",
  footerEndText = "team that values improving people's lives through accessible design",
  backgroundColor = "#121212",
  textColor = "#ffffff",
  accentColor = "#4154f1"
}) => {
  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor, color: textColor }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:left-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L10 10L0 20L10 30L0 40" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-10 right-10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="40" cy="20" r="15" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20L20 0L40 20L20 40L0 20Z" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L30 0L30 30" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Workflow diagram */}
        <div className="relative">
          {/* Central image */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden mb-8 md:mb-0">
            <img 
              src={imageSrc || "/placeholder.svg"} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Workflow steps - Desktop layout */}
          <div className="hidden md:block">
            {steps.map((step, index) => {
              // Calculate position based on index
              let positionClass = "";
              
              switch (index) {
                case 0: // Top left
                  positionClass = "absolute top-0 left-0";
                  break;
                case 1: // Top right
                  positionClass = "absolute top-0 right-0";
                  break;
                case 2: // Bottom left
                  positionClass = "absolute bottom-32 left-0";
                  break;
                case 3: // Bottom right
                  positionClass = "absolute bottom-32 right-0";
                  break;
                case 4: // Bottom center
                  positionClass = "absolute -bottom-64 left-1/2 transform -translate-x-1/2";
                  break;
                default:
                  positionClass = "";
              }
              
              return (
                <div 
                  key={step.id} 
                  className={`${positionClass} bg-white text-black rounded-lg p-6 shadow-lg w-64`}
                >
                  <div className="flex items-start">
                    <div 
                      className="rounded-full p-3 mr-4"
                      style={{ backgroundColor: accentColor }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-gray-200 opacity-50">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Workflow steps - Mobile layout */}
          <div className="md:hidden space-y-4">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="bg-white text-black rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start">
                  <div 
                    className="rounded-full p-3 mr-4"
                    style={{ backgroundColor: accentColor }}
                  >
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-gray-200 opacity-50">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-32 text-lg">
          <p>
            {footerText}{" "}
            <span style={{ color: accentColor }}>{highlightedText}</span>{" "}
            {footerEndText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
