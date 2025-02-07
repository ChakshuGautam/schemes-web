"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

// Mock function to fetch scheme data
const fetchSchemeData = async (id: string) => {
  // In a real application, this would be an API call
  return {
    _id: id,
    schemeStatus: "active",
    en: {
      basicDetails: {
        schemeName: "Education for All",
        schemeShortTitle: "EFA",
        schemeType: "state-sponsored",
        schemeOpenDate: "2023-01-01",
        schemeCloseDate: null,
        state: { value: 1, label: "Maharashtra" },
        geographicApplicability: {
          states: ["Maharashtra"],
          districts: null,
          excludedAreas: null,
          domicileRequired: true,
        },
        financialLimits: {
          upperLimit: 100000,
          lowerLimit: 0,
        },
        timeLimit: {
          duration: 1,
          unit: "year",
        },
        externalPortalUrl: "https://example.com/efa",
        requiredDocuments: ["Aadhar Card", "Income Certificate"],
        registrationRequirements: ["Online Registration Required"],
        nodalMinistryName: { value: 1, label: "Ministry of Education" },
        targetBeneficiaries: [
          { value: "students", label: "Students" },
          { value: "underprivileged", label: "Underprivileged" },
        ],
        level: { value: "state", label: "State" },
        schemeCategory: [{ value: "education", label: "Education" }],
      },
      schemeContent: {
        briefDescription: "Providing free education to underprivileged children",
        detailedDescription_md:
          "This scheme aims to provide free education to underprivileged children in Maharashtra...",
        benefits_md: "- Free education\n- Free textbooks\n- Midday meals",
        exclusions_md: "- Children above 14 years of age\n- Families with annual income above Rs. 2,00,000",
        references: [
          { title: "Official Website", url: "https://example.com/efa" },
          { title: "Government Resolution", url: "https://example.com/efa-gr" },
        ],
      },
    },
    slug: "education-for-all",
  }
}

export default function SchemePage() {
  const params = useParams()
  const [schemeData, setSchemeData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSchemeData(params.id as string)
      setSchemeData(data)
    }
    fetchData()
  }, [params.id])

  if (!schemeData) {
    return <div>Loading...</div>
  }

  const { en } = schemeData

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{en.basicDetails.schemeName}</h1>
      <p className="text-xl mb-8">{en.basicDetails.schemeShortTitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p>{en.schemeContent.briefDescription}</p>
            <div dangerouslySetInnerHTML={{ __html: en.schemeContent.detailedDescription_md }} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <div dangerouslySetInnerHTML={{ __html: en.schemeContent.benefits_md }} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exclusions</h2>
            <div dangerouslySetInnerHTML={{ __html: en.schemeContent.exclusions_md }} />
          </section>
        </div>

        <div>
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Scheme Details</h2>
            <ul className="space-y-2">
              <li>
                <strong>Type:</strong> {en.basicDetails.schemeType}
              </li>
              <li>
                <strong>Status:</strong> {schemeData.schemeStatus}
              </li>
              <li>
                <strong>Open Date:</strong> {en.basicDetails.schemeOpenDate || "Not specified"}
              </li>
              <li>
                <strong>Close Date:</strong> {en.basicDetails.schemeCloseDate || "Not specified"}
              </li>
              <li>
                <strong>State:</strong> {en.basicDetails.state.label}
              </li>
              <li>
                <strong>Level:</strong> {en.basicDetails.level.label}
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
            <ul className="space-y-2">
              <li>
                <strong>Target Beneficiaries:</strong>{" "}
                {en.basicDetails.targetBeneficiaries.map((b) => b.label).join(", ")}
              </li>
              <li>
                <strong>Domicile Required:</strong>{" "}
                {en.basicDetails.geographicApplicability.domicileRequired ? "Yes" : "No"}
              </li>
              {en.basicDetails.financialLimits && (
                <li>
                  <strong>Financial Limits:</strong>
                  {en.basicDetails.financialLimits.lowerLimit} - {en.basicDetails.financialLimits.upperLimit}
                </li>
              )}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
            <p className="mb-4">Visit the official website to apply:</p>
            <a
              href={en.basicDetails.externalPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Apply Now
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

