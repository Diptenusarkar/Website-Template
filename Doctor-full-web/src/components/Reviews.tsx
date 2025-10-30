
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      review: "Dr. Suvendu Pal is an excellent dentist. His root canal treatment was completely painless and the results are amazing. Highly recommended!",
      rating: 5,
      location: "Kolkata"
    },
    {
      name: "Rajesh Kumar",
      review: "Best dental experience I've ever had. The clinic is clean, staff is friendly, and Dr. Pal explains everything clearly. Great service!",
      rating: 5,
      location: "Salt Lake"
    },
    {
      name: "Anjali Das",
      review: "I was scared of dental procedures, but Dr. Pal made me feel comfortable throughout. My teeth cleaning was thorough and gentle.",
      rating: 5,
      location: "Park Street"
    },
    {
      name: "Amit Singh",
      review: "Professional service and modern equipment. Got my dental implant done here and couldn't be happier with the results.",
      rating: 5,
      location: "Ballygunge"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read reviews from our satisfied patients who trust us with their dental care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">{review.name.charAt(0)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
