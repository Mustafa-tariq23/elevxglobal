"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../../lib/firebase"
import { applicationSchema } from "../../lib/schema"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Alert, AlertDescription } from "../ui/alert"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../HeaderForPages"
import Footer from "../Footer"
// Update imports
import { FormField } from "../ui/form-field"

export default function JobApplicationForm({ job }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const jobId = id || (job ? job.id : null)

  // Remove agreeToTerms from initial state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    portfolio: "",
    reasonToSwitch: "",
    currentSalary: "",
    currentBenefits: "",
    expectedSalary: "",
    noticePeriod: "",
    jobId: jobId,
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })

      // Clear error for resume when user selects a file
      if (errors.resume) {
        setErrors({
          ...errors,
          resume: "",
        })
      }
    }
  }

  // First, update the validateForm function
  const validateForm = () => {
    const newErrors = {}

    // Basic validation
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.resume) newErrors.resume = "Resume is required"
    if (!formData.portfolio.trim()) newErrors.portfolio = "Portfolio URL is required"
    if (!formData.noticePeriod.trim()) newErrors.noticePeriod = "Notice period is required"
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
  
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  // Then, update the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError("")
  
    if (!validateForm()) {
      console.log("Form validation failed", errors)
      return
    }
  
    setLoading(true)
  
    try {
      // Upload resume first
      const resumeRef = ref(storage, `resumes/${formData.fullName}-${Date.now()}${formData.resume.name}`)
      await uploadBytes(resumeRef, formData.resume)
      const resumeUrl = await getDownloadURL(resumeRef)
  
      // Create application document
      const applicationData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        resumeUrl,
        portfolio: formData.portfolio,
        reasonToSwitch: formData.reasonToSwitch || "",
        currentSalary: formData.currentSalary || "",
        currentBenefits: formData.currentBenefits || "",
        expectedSalary: formData.expectedSalary || "",
        noticePeriod: formData.noticePeriod,
        jobId,
        applicationDate: serverTimestamp(),
        status: "pending"
      }
  
      const docRef = await addDoc(collection(db, "applications"), applicationData)
      console.log("Application submitted with ID:", docRef.id)
  
      setSubmitSuccess(true)
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        resume: null,
        portfolio: "",
        reasonToSwitch: "",
        currentSalary: "",
        currentBenefits: "",
        expectedSalary: "",
        noticePeriod: "",
        jobId,
      })
  
      // Redirect after successful submission
      setTimeout(() => {
        navigate("/Career")
      }, 2000)
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitError("Failed to submit application. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header heading="About Elevex Global"
        para="Elevex Global is dedicated to connecting talented professionals with the best opportunities in the tech industry. We work with leading tech companies to provide quality recruitment services and career advancement opportunities." />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link to={`/jobs/${jobId}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to job details
          </Link>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Apply for {job ? job.title : "this position"}</CardTitle>
              <CardDescription>Fill out the form below to submit your application</CardDescription>
            </CardHeader>

            <CardContent>
              {submitError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
              )}

              {submitSuccess && (
                <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                  <AlertDescription>
                    Your application has been submitted successfully! Redirecting you back to the job details...
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  label="Full Name"
                  name="fullName"
                  placeholder={"John Doe"}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  disabled={loading}
                  required
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder={"johndoe@gmail.com"}
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  disabled={loading}
                  required
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  placeholder={"(123) 456-7890"}
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  disabled={loading}
                  required
                />

                <FormField
                  label="Resume/CV"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  error={errors.resume}
                  disabled={loading}
                  required
                />

                <FormField
                  label="Github / LinkedIn / Tech Portfolio URL"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  error={errors.portfolio}
                  placeholder="https://LinkedIn.com/yourusername"
                  disabled={loading}
                  required
                />

                <FormField
                  label="Reason to Switch"
                  name="reasonToSwitch"
                  type="textarea"
                  value={formData.reasonToSwitch}
                  onChange={handleInputChange}
                  placeholder={"e.g., Looking for a new challenge, Better pay, etc."}
                  disabled={loading}
                  rows={3}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Current Salary"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    placeholder="e.g., 50k/month"
                    disabled={loading}
                  />

                  <FormField
                    label="Expected Salary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="e.g., 100k/month"
                    disabled={loading}
                  />
                </div>

                <FormField
                  label="Current Benefits"
                  name="currentBenefits"
                  type="textarea"
                  value={formData.currentBenefits}
                  onChange={handleInputChange}
                  placeholder="e.g., Health insurance, 401k, etc."
                  disabled={loading}
                  rows={2}
                />

                <FormField
                  label="When can you Join? (Notice Period)"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  error={errors.noticePeriod}
                  placeholder="e.g., 2 weeks, Immediately, etc."
                  disabled={loading}
                  required
                />
                
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                    {loading ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

