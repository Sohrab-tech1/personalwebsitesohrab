import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sohrab Fadai',
  description: 'Privacy policy and data protection information for Sohrab Fadai\'s services',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
            <p className="mb-4">
              Sohrab.se is part of Heartspace PR Sverige AB ("HEARTSPACE"). As such, this privacy policy should be read in conjunction 
              with the comprehensive Heartspace Privacy Policy. The full Heartspace privacy policy applies to all services provided 
              through sohrab.se and its associated platforms.
            </p>
            <p>
              For complete details about how we handle your data, please refer to the full Heartspace Privacy Policy at 
              <a href="https://heartspace.ai/privacy-policy" className="text-blue-600 hover:underline ml-1">
                heartspace.ai/privacy
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
            <p>
              Heartspace PR Sverige AB<br />
              Company Registration Number: 556882-2042<br />
              Garagevägen 32<br />
              121 32 Enskededalen<br />
              SWEDEN<br /><br />
              Email: <a href="mailto:hello@heartspace.ai" className="text-blue-600 hover:underline">
                hello@heartspace.ai
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">
              As detailed in the Heartspace Privacy Policy, you have comprehensive rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to correction of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us in writing at the address above or email 
              <a href="mailto:hello@heartspace.ai" className="text-blue-600 hover:underline ml-1">
                hello@heartspace.ai
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We reserve the right to make amendments to this Privacy Policy from time to time. The date for the latest 
              amendment is stated at the top of this page. Any changes will be published on this website and the main 
              Heartspace privacy policy page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}