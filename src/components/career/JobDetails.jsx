"use client";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft } from "lucide-react";
import Header from "../HeaderForPages";
import Footer from "../Footer";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = id;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  // Remove expanded state

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobDoc = await getDoc(doc(db, "jobs", jobId));

        if (jobDoc.exists()) {
          setJob({ id: jobDoc.id, ...jobDoc.data() });
        } else {
          console.error("Job not found");
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleApplyClick = () => {
    navigate(`/jobs/${jobId}/apply`);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Job not found</p>
      </div>
    );
  }

  // Remove default values for deprecated fields
  const aboutRole =
    job.aboutRole ||
    `As a ${job.title}, you will be responsible for delivering high-quality work and collaborating with cross-functional teams.`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        heading="About Elevex Global"
        para="Elevex Global is dedicated to connecting talented professionals with the best opportunities in the tech industry. We work with leading tech companies to provide quality recruitment services and career advancement opportunities."
      />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/Career"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all openings
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-4">{job.title}</h1>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {job.department}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {job.location}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm capitalize">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-medium  text-white mb-2">
                        About the Company
                      </h2>
                      <p className="text-gray-300">{aboutRole}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-white mb-2">
                        About the Job
                      </h2>
                      <p className="text-gray-300">{job.description}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-white mb-2">
                        Responsibilities
                      </h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-white mb-2">
                        Requirements
                      </h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Interested in this position?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We're looking for talented individuals to join our team. If
                    you think you're a good fit for this role, we'd love to hear
                    from you!
                  </p>
                  <Button
                    onClick={handleApplyClick}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
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
  );
}
