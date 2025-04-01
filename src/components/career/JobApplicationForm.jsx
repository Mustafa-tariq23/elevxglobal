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

export default function JobApplicationForm({ job }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const jobId = id || (job ? job.id : null)

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
    agreeToTerms: false,
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

  const validateForm = () => {
    try {
      // Create a validation object that matches the schema structure
      const validationObj = {
        ...formData,
        applicationDate: new Date(),
        status: "pending",
      }

      applicationSchema.parse(validationObj)
      return true
    } catch (error) {
      const formattedErrors = {}
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message
      })
      setErrors(formattedErrors)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError("")

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Upload resume to Firebase Storage
      const resumeRef = ref(storage, `resumes/${formData.fullName}-${Date.now()}`)
      await uploadBytes(resumeRef, formData.resume)
      const resumeUrl = await getDownloadURL(resumeRef)

      // Add application to Firestore
      await addDoc(collection(db, "applications"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        resumeUrl: resumeUrl,
        portfolio: formData.portfolio,
        reasonToSwitch: formData.reasonToSwitch,
        currentSalary: formData.currentSalary,
        currentBenefits: formData.currentBenefits,
        expectedSalary: formData.expectedSalary,
        noticePeriod: formData.noticePeriod,
        agreeToTerms: formData.agreeToTerms,
        jobId: formData.jobId,
        applicationDate: serverTimestamp(),
        status: "pending",
      })

      setSubmitSuccess(true)

      // Reset form after successful submission
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
        agreeToTerms: false,
        jobId: jobId,
      })

      // Redirect back to job details after 2 seconds
      setTimeout(() => {
        navigate(`/jobs/${jobId}`)
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
      <Header />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link to={`/jobs/${jobId}`} className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
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
                <div className="space-y-2">
                  <Label htmlFor="fullName" className={errors.fullName ? "text-red-500" : ""}>
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={errors.phone ? "text-red-500" : ""}>
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className={errors.resume ? "text-red-500" : ""}>
                    Resume/CV *
                  </Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleFileChange}
                    className={errors.resume ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                  {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio" className={errors.portfolio ? "text-red-500" : ""}>
                    Github/Tech Portfolio URL *
                  </Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://github.com/yourusername"
                    className={errors.portfolio ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  {errors.portfolio && <p className="text-red-500 text-sm">{errors.portfolio}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reasonToSwitch">Reason to Switch</Label>
                  <Textarea
                    id="reasonToSwitch"
                    name="reasonToSwitch"
                    value={formData.reasonToSwitch}
                    onChange={handleInputChange}
                    rows={3}
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentSalary">Current Salary</Label>
                    <Input
                      id="currentSalary"
                      name="currentSalary"
                      value={formData.currentSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., $50,000/year"
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedSalary">Expected Salary</Label>
                    <Input
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., $60,000/year"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentBenefits">Current Benefits</Label>
                  <Textarea
                    id="currentBenefits"
                    name="currentBenefits"
                    value={formData.currentBenefits}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="e.g., Health insurance, 401k, etc."
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="noticePeriod" className={errors.noticePeriod ? "text-red-500" : ""}>
                    When can you Join? (Notice Period) *
                  </Label>
                  <Input
                    id="noticePeriod"
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 weeks, Immediately, etc."
                    className={errors.noticePeriod ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  {errors.noticePeriod && <p className="text-red-500 text-sm">{errors.noticePeriod}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => {
                      setFormData({
                        ...formData,
                        agreeToTerms: checked,
                      })
                      if (errors.agreeToTerms) {
                        setErrors({
                          ...errors,
                          agreeToTerms: "",
                        })
                      }
                    }}
                    className={errors.agreeToTerms ? "border-red-500" : ""}
                    disabled={loading}
                  />
                  <Label htmlFor="agreeToTerms" className={`text-sm ${errors.agreeToTerms ? "text-red-500" : ""}`}>
                    I agree to the Terms and Conditions & Privacy Policy *
                  </Label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
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

