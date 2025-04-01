"use client"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { Button } from "../components/ui/button"
import { ArrowLeft, Briefcase, MapPin, Clock, Calendar, ChevronDown, ChevronUp, Building } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 w-full max-w-3xl bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Job Not Found</h2>
          <p className="text-gray-500 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to all openings
          </Link>
        </div>
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

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all openings
          </Link>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 border-b border-gray-100">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.department}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.location}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {job.type}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{companyName}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="capitalize">{job.type}</span>
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div className="p-8">
              {/* Basic Job Information */}
              <div className="space-y-8 mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                    Job Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.requirements.slice(0, expanded ? job.requirements.length : 3).map((req, index) => (
                      <li key={index} className="leading-relaxed">
                        {req}
                      </li>
                    ))}
                  </ul>
                  {!expanded && job.requirements.length > 3 && (
                    <p className="text-sm text-gray-500 mt-2">+ {job.requirements.length - 3} more requirements</p>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.responsibilities.slice(0, expanded ? job.responsibilities.length : 3).map((resp, index) => (
                      <li key={index} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  {!expanded && job.responsibilities.length > 3 && (
                    <p className="text-sm text-gray-500 mt-2">
                      + {job.responsibilities.length - 3} more responsibilities
                    </p>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Benefits</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.benefits.slice(0, expanded ? job.benefits.length : 3).map((benefit, index) => (
                      <li key={index} className="leading-relaxed">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  {!expanded && job.benefits.length > 3 && (
                    <p className="text-sm text-gray-500 mt-2">+ {job.benefits.length - 3} more benefits</p>
                  )}
                </div>
              </div>

              {/* Toggle Button */}
              <button
                className="flex items-center text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <>
                    <ChevronUp className="h-5 w-5 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5 mr-2" />
                    Show More Details
                  </>
                )}
              </button>

              {/* Detailed Job Information - Only visible when expanded */}
              {expanded && (
                <div className="border-t border-gray-100 pt-8 space-y-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Job: {job.title}</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                        <Building className="h-5 w-5 mr-2 text-blue-600" />
                        About the Company
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{aboutCompany}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">About the Role</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{aboutRole}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                              <Briefcase className="h-4 w-4 mr-2 text-green-600" />
                              Key Responsibilities
                            </h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              {keyResponsibilities.map((resp, index) => (
                                <li key={index} className="leading-relaxed">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-green-600" />
                              Experience
                            </h4>
                            <p className="text-gray-700 leading-relaxed">{experienceRequired}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-green-600" />
                              Working Days & Timings
                            </h4>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-gray-700 mb-2">
                                <span className="font-medium">Days:</span> {workingDays}
                              </p>
                              <p className="text-gray-700">
                                <span className="font-medium">Hours:</span> {workingHours}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-green-600" />
                              Location
                            </h4>
                            <p className="text-gray-700 leading-relaxed">{job.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">About {companyName}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {companyName} is dedicated to connecting talented professionals with the best opportunities in
                        the tech industry. We work with over 300 tech companies to provide quality recruitment services
                        and career advancement opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleApplyClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-sm hover:shadow transition-all"
                >
                  Apply for this Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

