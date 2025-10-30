import galleryHair from "@/assets/gallery-hair.jpg";
import gallerySkin from "@/assets/gallery-skin.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";

const galleryImages = [
  { src: galleryHair, alt: "Luxury hair styling with golden highlights" },
  { src: gallerySkin, alt: "Premium skincare facial treatment" },
  { src: galleryNails, alt: "Elegant nail art and manicure" },
  { src: galleryMakeup, alt: "Professional makeup artistry" },
];

const Gallery = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Gallery</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Our Work Speaks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Browse our portfolio of stunning transformations and beauty excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Glow border on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300 group-hover:glow-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
