import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import galleryHair from "@/assets/gallery-hair.jpg";
import gallerySkin from "@/assets/gallery-skin.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import galleryBridal from "@/assets/gallery-bridal.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";
import galleryTreatment from "@/assets/gallery-treatment.jpg";
import galleryEvening from "@/assets/gallery-evening.jpg";

const galleryCategories = [
  { name: "All", filter: "all" },
  { name: "Hair", filter: "hair" },
  { name: "Skin", filter: "skin" },
  { name: "Nails", filter: "nails" },
  { name: "Makeup", filter: "makeup" },
];

const galleryItems = [
  { src: galleryHair, alt: "Luxury hair styling with golden highlights", category: "hair" },
  { src: gallerySkin, alt: "Premium skincare facial treatment", category: "skin" },
  { src: galleryNails, alt: "Elegant nail art and manicure", category: "nails" },
  { src: galleryMakeup, alt: "Professional makeup artistry", category: "makeup" },
  { src: galleryBridal, alt: "Bridal hairstyle and beauty", category: "hair" },
  { src: gallerySpa, alt: "Luxury spa facial treatment", category: "skin" },
  { src: galleryTreatment, alt: "Premium hair treatment", category: "hair" },
  { src: galleryEvening, alt: "Evening glamour makeup", category: "makeup" },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container px-4 mb-16">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-light">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Beauty <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Explore our stunning collection of transformations and beauty excellence. 
              Each image tells a story of elegance, artistry, and perfection.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="container px-4 mb-12">
          <div
            className="flex flex-wrap justify-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {galleryCategories.map((category) => (
              <button
                key={category.filter}
                onClick={() => setActiveFilter(category.filter)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.filter
                    ? "bg-gradient-gold text-primary-foreground glow-gold"
                    : "glass-card text-foreground hover:border-primary/50 hover:text-gold"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-sm font-light text-foreground">View Image</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground font-light">
                No images found in this category.
              </p>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="container px-4 mt-24">
          <Card
            className="glass-card border-primary/30 p-12 text-center shadow-luxury glow-gold animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your <span className="text-gold">Transformation?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
              Let our expert team create your perfect look. Book your appointment today 
              and experience the luxury you deserve.
            </p>
            <a href="/booking">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold h-11 px-8">
                Book Your Appointment
              </button>
            </a>
          </Card>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full glass-card hover:border-primary hover:glow-gold transition-all duration-300"
          >
            <X className="w-6 h-6 text-gold" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-luxury glow-gold"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
