const ProjectsSection = () => {
  const projects = [
    {
      title: "Downtown Plaza",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      description: "Modern commercial complex with retail and office spaces"
    },
    {
      title: "Riverside Residences", 
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      description: "Luxury residential development with contemporary design"
    },
    {
      title: "Innovation Center",
      category: "Commercial", 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      description: "State-of-the-art technology and innovation hub"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wide">Our Work</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-foreground">Projects</h2>
          
          <div className="flex justify-center space-x-8 mb-8">
            <button className="text-primary font-medium border-b-2 border-primary pb-2">All</button>
            <button className="text-muted-foreground hover:text-primary transition-colors">Commercial</button>
            <button className="text-muted-foreground hover:text-primary transition-colors">Residential</button>
            <button className="text-muted-foreground hover:text-primary transition-colors">Industrial</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium text-sm">{project.category}</span>
                  <button className="w-8 h-8 bg-construction-dark text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;