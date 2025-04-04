"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs, query, orderBy, doc, updateDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Search, Download, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Badge } from "../../components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [jobs, setJobs] = useState({})

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applicationsQuery = query(collection(db, "applications"), orderBy("applicationDate", "desc"))
        const querySnapshot = await getDocs(applicationsQuery)

        const applicationsData = []
        querySnapshot.forEach((doc) => {
          applicationsData.push({ id: doc.id, ...doc.data() })
        })

        setApplications(applicationsData)

        // Fetch job details for each application
        const jobIds = [...new Set(applicationsData.map((app) => app.jobId))]
        const jobsData = {}

        for (const jobId of jobIds) {
          const jobDoc = await getDocs(doc(db, "jobs", jobId))
          if (jobDoc.exists()) {
            jobsData[jobId] = { id: jobId, ...jobDoc.data() }
          }
        }

        setJobs(jobsData)
      } catch (error) {
        console.error("Error fetching applications:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      await updateDoc(doc(db, "applications", applicationId), {
        status: newStatus,
      })

      // Update local state
      setApplications(applications.map((app) => (app.id === applicationId ? { ...app, status: newStatus } : app)))

      if (selectedApplication && selectedApplication.id === applicationId) {
        setSelectedApplication({ ...selectedApplication, status: newStatus })
      }
    } catch (error) {
      console.error("Error updating application status:", error)
    }
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "interviewed":
        return "bg-purple-100 text-purple-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "hired":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/admin" className="flex items-center">
            <div className="relative h-10 w-32">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-600">Elevex</span>
                <span className="text-2xl font-bold text-gray-800">Global</span>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/admin">
              <Button variant="outline">Back to Admin</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Job Applications</h1>
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name or email..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="interviewed">Interviewed</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">Loading applications...</p>
            </div>
          ) : filteredApplications.length > 0 ? (
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableCaption>List of all job applications</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Job Position</TableHead>
                      <TableHead>Application Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((application) => {
                      const job = jobs[application.jobId]
                      const applicationDate = application.applicationDate?.toDate
                        ? application.applicationDate.toDate().toLocaleDateString()
                        : "N/A"

                      return (
                        <TableRow key={application.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{application.fullName}</p>
                              <p className="text-sm text-gray-500">{application.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{job?.title || "Unknown Position"}</TableCell>
                          <TableCell>{applicationDate}</TableCell>
                          <TableCell>
                            <Badge className={getStatusBadgeColor(application.status)}>
                              {application.status?.charAt(0).toUpperCase() + application.status?.slice(1) || "Pending"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setSelectedApplication(application)}
                                  >
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View</span>
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                  <DialogHeader>
                                    <DialogTitle>Application Details</DialogTitle>
                                    <DialogDescription>Submitted on {applicationDate}</DialogDescription>
                                  </DialogHeader>

                                  {selectedApplication && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                      <div className="space-y-4">
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                                          <p>{selectedApplication.fullName}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                          <p>{selectedApplication.email}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                          <p>{selectedApplication.phone}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Portfolio</h3>
                                          <a
                                            href={selectedApplication.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                          >
                                            {selectedApplication.portfolio}
                                          </a>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Resume</h3>
                                          <a
                                            href={selectedApplication.resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:underline"
                                          >
                                            <Download className="h-4 w-4 mr-1" />
                                            Download Resume
                                          </a>
                                        </div>
                                      </div>

                                      <div className="space-y-4">
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Current Salary</h3>
                                          <p>{selectedApplication.currentSalary || "Not specified"}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Expected Salary</h3>
                                          <p>{selectedApplication.expectedSalary || "Not specified"}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Current Benefits</h3>
                                          <p>{selectedApplication.currentBenefits || "Not specified"}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Notice Period</h3>
                                          <p>{selectedApplication.noticePeriod}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">Reason to Switch</h3>
                                          <p>{selectedApplication.reasonToSwitch || "Not specified"}</p>
                                        </div>
                                      </div>

                                      <div className="col-span-1 md:col-span-2">
                                        <h3 className="text-sm font-medium text-gray-500">Application Status</h3>
                                        <Select
                                          value={selectedApplication.status || "pending"}
                                          onValueChange={(value) => handleStatusChange(selectedApplication.id, value)}
                                        >
                                          <SelectTrigger className="w-full mt-2">
                                            <SelectValue placeholder="Select status" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="reviewed">Reviewed</SelectItem>
                                            <SelectItem value="interviewed">Interviewed</SelectItem>
                                            <SelectItem value="rejected">Rejected</SelectItem>
                                            <SelectItem value="hired">Hired</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>

                              <a
                                href={application.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                              >
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download Resume</span>
                              </a>
                            </div>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">No applications found.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} HR WAYS Admin Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

