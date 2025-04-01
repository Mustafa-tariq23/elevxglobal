// import React, { useEffect, useRef } from 'react';
// import { Globe, PenTool, Settings, BarChart3, Rocket } from 'lucide-react';

// // Default workflow steps
// const defaultWorkflowSteps = [
//   {
//     id: 1,
//     number: '01',
//     title: 'Understanding Your Audience',
//     description: 'Analyzing market trends and customer demographics to tailor your product or service.',
//     icon: <Globe className="h-6 w-6" />
//   },
//   {
//     id: 2,
//     number: '02',
//     title: 'Planning & Sketching',
//     description: 'Analyzing market trends and customer demographics to tailor your product or service.',
//     icon: <PenTool className="h-6 w-6" />
//   },
//   {
//     id: 3,
//     number: '03',
//     title: 'Customization Process',
//     description: 'Analyzing market trends and customer demographics to tailor your product or service.',
//     icon: <Settings className="h-6 w-6" />
//   },
//   {
//     id: 4,
//     number: '04',
//     title: 'User Testing & Feedback',
//     description: 'Analyzing market trends and customer demographics to tailor your product or service.',
//     icon: <BarChart3 className="h-6 w-6" />
//   },
//   {
//     id: 5,
//     number: '05',
//     title: 'Product Launch',
//     description: 'Analyzing market trends and customer demographics to tailor your product or service.',
//     icon: <Rocket className="h-6 w-6" />
//   }
// ];

// /**
//  * WorkflowSectionWithAnimation Component
//  * 
//  * An enhanced version of the WorkflowSection with scroll-based animations.
//  * Uses Intersection Observer to trigger animations when elements come into view.
//  */
// const WorkflowSectionWithAnimation = ({
//   title = "WORKFLOW",
//   description = "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.",
//   imageSrc = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-27%20at%209.25.43%20PM-BN9esbOoUsmECluRhaudpz608srt1O.png",
//   imageAlt = "Person working on a project",
//   steps = defaultWorkflowSteps,
//   footerText = "I'm currently looking to join a",
//   highlightedText = "cross-functional",
//   footerEndText = "team that values improving people's lives through accessible design",
//   backgroundColor = "#121212",
//   textColor = "#ffffff",
//   accentColor = "#4154f1"
// }) => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const imageRef = useRef(null);
//   const stepRefs = useRef([]);
//   const footerRef = useRef(null);

//   // Set up refs for each step
//   stepRefs.current = steps.map((_, i) => stepRefs.current[i] ?? React.createRef());

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.3
//     };

//     const observerCallback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     // Observe all elements that should be animated
//     if (headerRef.current) observer.observe(headerRef.current);
//     if (imageRef.current) observer.observe(imageRef.current);
//     stepRefs.current.forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });
//     if (footerRef.current) observer.observe(footerRef.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-20 px-4 overflow-hidden"
//       style={{ backgroundColor, color: textColor }}
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 md:left-20">
//         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 0L10 10L0 20L10 30L0 40" stroke="white" strokeWidth="2" />
//         </svg>
//       </div>
//       <div className="absolute top-10 right-10">
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="30" cy="30" r="20" stroke="white" strokeWidth="1" fill="none" />
//           <circle cx="40" cy="20" r="15" stroke="white" strokeWidth="1" fill="none" />
//         </svg>
//       </div>
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
//         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 20L20 0L40 20L20 40L0 20Z" stroke="white" strokeWidth="1" fill="none" />
//         </svg>
//       </div>
//       <div className="absolute bottom-10 right-10">
//         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 0L30 0L30 30" stroke="white" strokeWidth="2" />
//         </svg>
//       </div>

//       <div className="container mx-auto max-w-6xl">
//         {/* Header */}
//         <div 
//           ref={headerRef} 
//           className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h2>
//           <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
//             {description}
//           </p>
//         </div>

//         {/* Workflow diagram */}
//         <div className="relative space-y-4">
//           {/* Central image */}
//           <div 
//             ref={imageRef}
//             className="relative z-10 rounded-full sm:rounded-none sm:h-[400px] mx-auto overflow-hidden mb-8 md:mb-0 opacity-0 scale-95 transition-all duration-700 delay-300"
//           >
//             <img 
//               src={imageSrc || "/placeholder.svg"} 
//               alt={imageAlt} 
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Workflow steps - Desktop layout */}
//           <div className="hidden md:block">
//             {steps.map((step, index) => {
//               // Calculate position based on index
//               let positionClass = "";
//               let animationDelay = 300 + (index * 150);
              
//               switch (index) {
//                 case 0: // Top left
//                   positionClass = "absolute top-0 left-0";
//                   break;
//                 case 1: // Top right
//                   positionClass = "absolute top-0 right-0";
//                   break;
//                 case 2: // Bottom left
//                   positionClass = "absolute bottom-32 left-0";
//                   break;
//                 case 3: // Bottom right
//                   positionClass = "absolute bottom-32 right-0";
//                   break;
//                 case 4: // Bottom center
//                   positionClass = "absolute -bottom-64 left-1/2 transform -translate-x-1/2";
//                   break;
//                 default:
//                   positionClass = "";
//               }
              
//               return (
//                 <div 
//                   key={step.id} 
//                   ref={stepRefs.current[index]}
//                   className={`${positionClass} bg-white text-black rounded-lg p-6 shadow-lg w-64 opacity-0 translate-y-10 transition-all duration-700 workflow-step-card`}
//                   style={{ transitionDelay: `${animationDelay}ms` }}
//                 >
//                   <div className="flex items-start">
//                     <div 
//                       className="rounded-full p-3 mr-4"
//                       style={{ backgroundColor: accentColor }}
//                     >
//                       <div className="text-white">
//                         {step.icon}
//                       </div>
//                     </div>
//                     <div className="text-6xl font-bold text-gray-200 opacity-50">
//                       {step.number}
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
//                   <p className="text-gray-600 text-sm">{step.description}</p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Workflow steps - Mobile layout */}
//           <div className="space-y-4">
//             {steps.map((step, index) => (
//               <div 
//                 key={step.id} 
//                 ref={stepRefs.current[index]}
//                 className="bg-white text-black rounded-lg p-6 shadow-lg opacity-0 translate-y-10 transition-all duration-700 workflow-step-card"
//                 style={{ transitionDelay: `${300 + (index * 150)}ms` }}
//               >
//                 <div className="flex items-start">
//                   <div 
//                     className="rounded-full p-3 mr-4"
//                     style={{ backgroundColor: accentColor }}
//                   >
//                     <div className="text-white">
//                       {step.icon}
//                     </div>
//                   </div>
//                   <div className="text-6xl font-bold text-gray-200 opacity-50">
//                     {step.number}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer text */}
//         <div 
//           ref={footerRef}
//           className="text-center mt-32 text-lg opacity-0 translate-y-10 transition-all duration-700 delay-1000"
//         >
//           <p>
//             {footerText}{" "}
//             <span style={{ color: accentColor }}>{highlightedText}</span>{" "}
//             {footerEndText}
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         .animate-in {
//           opacity: 1 !important;
//           transform: translateY(0) scale(1) !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WorkflowSectionWithAnimation;

"use client"

import { useEffect, useState } from "react"
import { Globe, PenTool, Settings, MessageSquare, Rocket } from "lucide-react"

export default function WorkflowSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const workflowSteps = [
    {
      id: "01",
      title: "Understanding Your Audience",
      description: "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      id: "02",
      title: "Planning & Sketching",
      description: "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <PenTool className="h-6 w-6 text-white" />,
    },
    {
      id: "03",
      title: "Customization Process",
      description: "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <Settings className="h-6 w-6 text-white" />,
    },
    {
      id: "04",
      title: "User Testing & Feedback",
      description: "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
    },
    {
      id: "05",
      title: "Product Launch",
      description: "Analyzing market trends and customer demographics to tailor your product or service.",
      icon: <Rocket className="h-6 w-6 text-white" />,
    },
  ]

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
  )

  return (
    <section className="relative bg-black text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:left-20">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20L20 0L40 20L60 0L80 20" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 md:left-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L40 20L0 40V0Z" fill="white" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-10 right-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0V40M0 20H40" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">WORKFLOW</h2>
        <p className="text-gray-400">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to
          fill empty spaces in a layout that do not yet have content.
        </p>
      </div>

      {/* Mobile View - List */}
      {isMobile && (
        <div className="space-y-6">
          {workflowSteps.map((step) => (
            <div key={step.id} className="bg-black border border-gray-800 rounded-lg p-6 flex items-start">
              <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">{step.icon}</div>
              <div className="flex-grow">
                <div className="text-5xl font-bold text-gray-500 mb-2">{step.id}</div>
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
  )
}

