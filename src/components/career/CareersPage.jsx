// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { collection, getDocs, query, orderBy } from "firebase/firestore"
// import { db } from "../../lib/firebase"
// import { Input } from "../../components/ui/input"
// import { Search, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react"
// import Footer from "../../components/Footer"
// import HeaderForPages from "../HeaderForPages"

// export default function CareersPage() {
//   const [jobs, setJobs] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
//   const [selectedJobType, setSelectedJobType] = useState("All Types")

//   const departments = ["All Departments", "Engineering", "Sales", "Marketing", "Customer Support", "Human Resources"]
//   const jobTypes = ["All Types", "onsite", "remote", "hybrid"]

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const jobsQuery = query(collection(db, "jobs"), orderBy("createdAt", "desc"))
//         const querySnapshot = await getDocs(jobsQuery)

//         const jobsData = []
//         querySnapshot.forEach((doc) => {
//           jobsData.push({ id: doc.id, ...doc.data() })
//         })

//         setJobs(jobsData)
//       } catch (error) {
//         console.error("Error fetching jobs:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchJobs()
//   }, [])

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesDepartment = selectedDepartment === "All Departments" || job.department === selectedDepartment
//     const matchesJobType = selectedJobType === "All Types" || job.type === selectedJobType.toLowerCase()
//     return matchesSearch && matchesDepartment && matchesJobType
//   })

//   return (
//     <div className="flex flex-col min-h-screen">
//       <HeaderForPages
//         heading={"Career"}
//         para={"We're looking for Great People from around the world to match to our existing clientele"}
//         Button={"View Openings"}
//       />

//       <main className="flex-1 bg-white">
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
//               <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
//                 <p className="text-lg mb-6 text-gray-700">
//                   <span className="font-semibold text-gray-900">
//                     Fast placements. Quality onboarding. Tenacious testing.
//                   </span>{" "}
//                   What's HR Ways, that's what you wanted to ask. The only dedicated Tech and Digital recruitment agency
//                   having worldwide first-class HR solutions. Our Recruiters work with the best software and digital
//                   agencies in the region. We equip our clients with priceless industry insight and put everything we've
//                   got into training and mentoring our candidates.
//                 </p>
//                 <p className="text-lg mb-6 text-gray-700">
//                   We're here to match talented people with the job opportunities and employers they're looking for. On a
//                   monthly basis, we engage over <span className="font-semibold text-gray-900">5000+ people</span> for
//                   opportunities that create disruption in the market. Join our WhatsApp Channel{" "}
//                   <a href="https://shorturl.at/983az" className="text-blue-600 hover:text-blue-800">
//                     https://shorturl.at/983az
//                   </a>{" "}
//                   to stay updated.
//                 </p>
//                 <div className="flex justify-center mt-8">
//                   <a
//                     href="https://shorturl.at/983az"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"
//                   >
//                     Join Our WhatsApp Channel <ArrowRight size={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="job-openings" className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Our Openings</h2>
//               <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Discover your next career opportunity with us. We're constantly looking for talented individuals to join
//                 our growing network of professionals.
//               </p>
//             </div>

//             <div className="max-w-5xl mx-auto mb-10 bg-white p-4 rounded-lg shadow-md">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <Input
//                     type="text"
//                     placeholder="Search job titles"
//                     className="pl-10 border-gray-300 bg-white focus:border-gray-300 focus:ring-transparent"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 <select
//                   className="p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
//                   value={selectedDepartment}
//                   onChange={(e) => setSelectedDepartment(e.target.value)}
//                 >
//                   {departments.map((dept) => (
//                     <option key={dept} value={dept}>
//                       {dept}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   className="p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
//                   value={selectedJobType}
//                   onChange={(e) => setSelectedJobType(e.target.value)}
//                 >
//                   {jobTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type === "All Types" ? type : type.charAt(0).toUpperCase() + type.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//               {loading ? (
//                 <div className="col-span-2 text-center py-16 bg-white rounded-lg shadow-md">
//                   <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
//                   <p className="text-lg text-gray-600 mt-4">Loading job openings...</p>
//                 </div>
//               ) : filteredJobs.length > 0 ? (
//                 filteredJobs.map((job) => (
//                   <div
//                     key={job.id}
//                     className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//                   >
//                     <div className="h-1 bg-blue-600"></div>
//                     <div className="p-6">
//                       <div className="mb-4">
//                         <h3 className="text-xl font-medium text-gray-900">{job.title}</h3>
//                         <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
//                           <Briefcase size={14} />
//                           <span>{job.department}</span>
//                         </div>
//                       </div>
//                       <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
//                         <div className="flex items-center gap-2">
//                           <MapPin size={14} />
//                           <span>{job.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock size={14} />
//                           <span className="capitalize">{job.type}</span>
//                         </div>
//                       </div>
//                       <Link to={`/jobs/${job.id}`} className="block">
//                         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2">
//                           View Details <ArrowRight size={16} />
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-span-2 text-center py-16 bg-white rounded-lg shadow-md">
//                   <p className="text-lg text-gray-700">No job openings match your search criteria.</p>
//                   <p className="mt-2 text-gray-500">Try adjusting your filters or search term.</p>
//                 </div>
//               )}
//             </div>

//             {filteredJobs.length > 0 && (
//               <div className="text-center mt-12">
//                 <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
//                 <Link to="/ContactUs" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
//                   Reach out to us
//                 </Link>
//               </div>
//             )}
//           </div>
//         </section>

//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">Why Work With Us?</h2>
//               <div className="grid md:grid-cols-3 gap-8">
//                 <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-100">
//                   <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-white"
//                     >
//                       <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Placements</h3>
//                   <p className="text-gray-600">
//                     We pride ourselves on quickly matching the right talent with the right opportunities.
//                   </p>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-100">
//                   <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-white"
//                     >
//                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                       <polyline points="22 4 12 14.01 9 11.01" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Onboarding</h3>
//                   <p className="text-gray-600">
//                     Our comprehensive onboarding process ensures a smooth transition into your new role.
//                   </p>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-100">
//                   <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-white"
//                     >
//                       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//                       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900">Tenacious Testing</h3>
//                   <p className="text-gray-600">
//                     We thoroughly evaluate skills to ensure the perfect match between candidates and employers.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }

"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "../../components/HeaderForPages"
import Footer from "../../components/Footer"

export default function CareersPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedJobType, setSelectedJobType] = useState("All Types")
  const [departments, setDepartments] = useState(["All Departments"])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const jobsPerPage = 10

  const jobTypes = ["All Types", "onsite", "remote", "hybrid"]

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsQuery = query(collection(db, "jobs"), orderBy("createdAt", "desc"))
        const querySnapshot = await getDocs(jobsQuery)

        const jobsData = []
        const uniqueDepartments = new Set(["All Departments"])

        querySnapshot.forEach((doc) => {
          const jobData = { id: doc.id, ...doc.data() }
          jobsData.push(jobData)

          // Add department to unique departments set
          if (jobData.department) {
            uniqueDepartments.add(jobData.department)
          }
        })

        setJobs(jobsData)
        setDepartments(Array.from(uniqueDepartments))
        setTotalPages(Math.ceil(jobsData.length / jobsPerPage))
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All Departments" || job.department === selectedDepartment
    const matchesJobType = selectedJobType === "All Types" || job.type === selectedJobType.toLowerCase()
    return matchesSearch && matchesDepartment && matchesJobType
  })

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalFilteredPages = Math.ceil(filteredJobs.length / jobsPerPage)

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalFilteredPages) {
      setCurrentPage(pageNumber)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-green-500 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Recruitment Partner to 300+ Tech Companies</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              We're looking for Great People from around the world to match to our existing clientele
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 px-8 py-6 text-lg h-auto">
              <a href="#job-openings">View Openings</a>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                Fast placements. Quality onboarding. Tenacious testing. What's HR Ways, that's what you wanted to ask.
                The only Tenacious testing. What's HR Ways, that's what you wanted to ask. The only dedicated Tech and
                Digital recruitment agency having worldwide first-class HR solutions. Our Recruiters work with the best
                software and digital agencies in the region. We equip our clients with priceless industry insight and
                put everything we've got into training and mentoring our candidates.
              </p>
              <p className="text-lg mb-6">
                We're here to match talented people with the job opportunities and employers they're looking for. On a
                monthly basis, we engage over 5000+ people for opportunities that create disruption in the market. Join
                our WhatsApp Channel{" "}
                <a href="https://shorturl.at/983az" className="text-blue-600 hover:underline">
                  https://shorturl.at/983az
                </a>{" "}
                to stay updated.
              </p>
            </div>
          </div>
        </section>

        <section id="job-openings" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Openings</h2>

            <div className="max-w-5xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search job titles"
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1) // Reset to first page on search
                    }}
                  />
                </div>
                <select
                  className="p-2 border rounded-md"
                  value={selectedDepartment}
                  onChange={(e) => {
                    setSelectedDepartment(e.target.value)
                    setCurrentPage(1) // Reset to first page on filter change
                  }}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <select
                  className="p-2 border rounded-md"
                  value={selectedJobType}
                  onChange={(e) => {
                    setSelectedJobType(e.target.value)
                    setCurrentPage(1) // Reset to first page on filter change
                  }}
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "All Types" ? type : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {loading ? (
                <div className="col-span-2 text-center py-8">
                  <p className="text-lg text-gray-500">Loading job openings...</p>
                </div>
              ) : currentJobs.length > 0 ? (
                currentJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span className="capitalize">{job.type}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-8">
                  <p className="text-lg text-gray-500">No job openings match your search criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredJobs.length > jobsPerPage && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous Page</span>
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalFilteredPages }, (_, i) => i + 1)
                      .filter((page) => {
                        // Show first page, last page, current page, and pages around current page
                        return (
                          page === 1 ||
                          page === totalFilteredPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        )
                      })
                      .map((page, index, array) => {
                        // Add ellipsis where there are gaps
                        if (index > 0 && array[index - 1] !== page - 1) {
                          return (
                            <React.Fragment key={`ellipsis-${page}`}>
                              <span className="px-2">...</span>
                              <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="sm"
                                onClick={() => paginate(page)}
                                className="w-8 h-8"
                              >
                                {page}
                              </Button>
                            </React.Fragment>
                          )
                        }
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => paginate(page)}
                            className="w-8 h-8"
                          >
                            {page}
                          </Button>
                        )
                      })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalFilteredPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next Page</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

