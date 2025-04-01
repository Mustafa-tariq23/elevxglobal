// "use client"

// import { useState, useEffect } from "react"
// import { Link, useParams } from "react-router-dom"
// import { doc, getDoc } from "firebase/firestore"
// import { db } from "../../lib/firebase"
// import { Button } from "../../components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
// import { Input } from "../../components/ui/input"
// import { Textarea } from "../../components/ui/textarea"
// import { ArrowLeft } from "lucide-react"
// import Footer from "../../components/Footer"
// import HeaderForPages from "../HeaderForPages"

// export default function JobDetails() {
//   const { id } = useParams()
//   const jobId = id

//   const [job, setJob] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: null,
//     coverLetter: "",
//   })

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const jobDoc = await getDoc(doc(db, "jobs", jobId))

//         if (jobDoc.exists()) {
//           setJob({ id: jobDoc.id, ...jobDoc.data() })
//         } else {
//           console.error("Job not found")
//         }
//       } catch (error) {
//         console.error("Error fetching job:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchJob()
//   }, [jobId])

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({
//         ...formData,
//         resume: e.target.files[0],
//       })
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Here you would typically send the data to your backend
//     alert("Application submitted successfully!")
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <p className="text-lg">Loading job details...</p>
//       </div>
//     )
//   }

//   if (!job) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <p className="text-lg">Job not found</p>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <HeaderForPages heading={job.title} />

//       <main className="flex-1 bg-gray-50 py-12">
//         <div className="container mx-auto px-4">
//           <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to all openings
//           </Link>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="md:col-span-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-2xl">{job.title}</CardTitle>
//                   <CardDescription className="flex flex-wrap gap-2 text-sm">
//                     <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{job.department}</span>
//                     <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.location}</span>
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded capitalize">{job.type}</span>
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Job Description</h3>
//                     <p>{job.description}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Requirements</h3>
//                     <ul className="list-disc pl-5 space-y-1">
//                       {job.requirements.map((req, index) => (
//                         <li key={index}>{req}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
//                     <ul className="list-disc pl-5 space-y-1">
//                       {job.responsibilities.map((resp, index) => (
//                         <li key={index}>{resp}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Benefits</h3>
//                     <ul className="list-disc pl-5 space-y-1">
//                       {job.benefits.map((benefit, index) => (
//                         <li key={index}>{benefit}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             <div>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Apply for this position</CardTitle>
//                   <CardDescription>Fill out the form below to apply</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium">
//                         Full Name
//                       </label>
//                       <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium">
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="phone" className="text-sm font-medium">
//                         Phone Number
//                       </label>
//                       <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="resume" className="text-sm font-medium">
//                         Resume/CV
//                       </label>
//                       <Input id="resume" name="resume" type="file" onChange={handleFileChange} required />
//                       <p className="text-xs text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="coverLetter" className="text-sm font-medium">
//                         Cover Letter (Optional)
//                       </label>
//                       <Textarea
//                         id="coverLetter"
//                         name="coverLetter"
//                         value={formData.coverLetter}
//                         onChange={handleInputChange}
//                         rows={4}
//                       />
//                     </div>

//                     <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
//                       Submit Application
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import Header from "../HeaderForPages"
import Footer from "../Footer"

export default function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const jobId = id

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobDoc = await getDoc(doc(db, "jobs", jobId))

        if (jobDoc.exists()) {
          setJob({ id: jobDoc.id, ...jobDoc.data() })
        } else {
          console.error("Job not found")
        }
      } catch (error) {
        console.error("Error fetching job:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [jobId])

  const handleApplyClick = () => {
    navigate(`/jobs/${jobId}/apply`)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading job details...</p>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Job not found</p>
      </div>
    )
  }

  // Default values for new fields if they don't exist
  const aboutCompany =
    job.aboutCompany ||
    "HR WAYS is a leading recruitment partner for tech companies, specializing in matching talented professionals with the right opportunities."
  const aboutRole =
    job.aboutRole ||
    `As a ${job.title}, you will be responsible for delivering high-quality work and collaborating with cross-functional teams.`
  const keyResponsibilities = job.keyResponsibilities || job.responsibilities
  const experienceRequired = job.experienceRequired || "Relevant experience in the field is required."
  const workingDays = job.workingDays || "Monday to Friday"
  const workingHours = job.workingHours || "9:00 AM to 6:00 PM"
  const companyName = job.aboutCompanyName || "HR WAYS"

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all openings
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Initial Job Overview Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-4">{job.title}</h1>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{job.department}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{job.location}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm capitalize">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-medium text-gray-700 mb-2">Job Description</h2>
                      <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-gray-700 mb-2">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {job.requirements.slice(0, expanded ? job.requirements.length : 3).map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      {!expanded && job.requirements.length > 3 && (
                        <p className="text-sm text-gray-500 mt-1">+ {job.requirements.length - 3} more requirements</p>
                      )}
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-gray-700 mb-2">Responsibilities</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {job.responsibilities
                          .slice(0, expanded ? job.responsibilities.length : 3)
                          .map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                      </ul>
                      {!expanded && job.responsibilities.length > 3 && (
                        <p className="text-sm text-gray-500 mt-1">
                          + {job.responsibilities.length - 3} more responsibilities
                        </p>
                      )}
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-gray-700 mb-2">Benefits</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {job.benefits.slice(0, expanded ? job.benefits.length : 3).map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                      {!expanded && job.benefits.length > 3 && (
                        <p className="text-sm text-gray-500 mt-1">+ {job.benefits.length - 3} more benefits</p>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="mt-6 flex items-center text-green-600 hover:text-green-700 hover:bg-green-50 px-0"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        Read More
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Detailed Job Information - Only visible when expanded */}
              {expanded && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">About the Job: {job.title}</h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-3">About the Company</h3>
                        <p className="text-gray-600">{aboutCompany}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-3">About the Role</h3>
                        <p className="text-gray-600 mb-4">{aboutRole}</p>

                        <div className="ml-4 space-y-6">
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Key Responsibilities</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              {keyResponsibilities.map((resp, index) => (
                                <li key={index}>{resp}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Requirements</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Experience</h4>
                            <p className="text-gray-600">{experienceRequired}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Working Days & Timings</h4>
                            <p className="text-gray-600">Days: {workingDays}</p>
                            <p className="text-gray-600">Hours: {workingHours}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Location</h4>
                            <p className="text-gray-600">{job.location}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-3">About {companyName}</h3>
                        <p className="text-gray-600">
                          {companyName} is dedicated to connecting talented professionals with the best opportunities in
                          the tech industry. We work with over 300 tech companies to provide quality recruitment
                          services and career advancement opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Interested in this position?</h3>
                  <p className="text-gray-600 mb-6">
                    We're looking for talented individuals to join our team. If you think you're a good fit for this
                    role, we'd love to hear from you!
                  </p>
                  <Button onClick={handleApplyClick} className="w-full bg-green-600 hover:bg-green-700">
                    Apply for this Job
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
