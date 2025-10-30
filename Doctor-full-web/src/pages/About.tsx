
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">About Dr. Suvendu Pal</h1>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  Dr. Suvendu Pal is a highly experienced and skilled dentist based in Kolkata, West Bengal. 
                  With over 15 years of practice in dentistry, Dr. Pal has established himself as a trusted 
                  healthcare provider specializing in comprehensive dental care.
                </p>
                <p className="text-gray-700 mb-4">
                  Dr. Pal is known for his gentle approach and commitment to providing pain-free dental 
                  treatments. He believes in educating patients about their oral health and works closely 
                  with them to develop personalized treatment plans.
                </p>
                <p className="text-gray-700">
                  His practice focuses on preventive care, restorative dentistry, and cosmetic procedures, 
                  ensuring that patients receive comprehensive dental care under one roof.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">15+ Years in Practice</h3>
                  <p className="text-gray-600">Extensive experience in general and specialized dentistry</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">5000+ Successful Treatments</h3>
                  <p className="text-gray-600">Root canals, implants, cosmetic procedures, and more</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Continuous Education</h3>
                  <p className="text-gray-600">Regular updates with latest dental techniques and technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Qualifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• BDS - Bachelor of Dental Surgery</li>
                  <li>• MDS - Master of Dental Surgery</li>
                  <li>• Member, Indian Dental Association</li>
                  <li>• Certified in Advanced Endodontics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Root Canal Treatment</li>
                  <li>• Dental Implants</li>
                  <li>• Cosmetic Dentistry</li>
                  <li>• Orthodontics (Braces)</li>
                  <li>• Oral Surgery</li>
                  <li>• Preventive Dentistry</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• English</li>
                  <li>• Hindi</li>
                  <li>• Bengali</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 border-teal-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-4">Why Choose Dr. Pal?</h3>
                <ul className="space-y-2 text-teal-700">
                  <li>✓ Pain-free treatments</li>
                  <li>✓ Latest dental technology</li>
                  <li>✓ Personalized care plans</li>
                  <li>✓ Affordable pricing</li>
                  <li>✓ Flexible appointment slots</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
