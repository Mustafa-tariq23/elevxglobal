"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import JobApplicationForm from "./JobApplicationForm"

export default function JobApplicationPage() {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobDoc = await getDoc(doc(db, "jobs", id))

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
  }, [id])

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

  return <JobApplicationForm job={job} />
}

