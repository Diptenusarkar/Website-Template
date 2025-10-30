import { Building, Hammer, ClipboardList, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-8">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* General Contracting - Large Orange Card */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold mb-4">General contracting</h3>
                <p className="mb-8 opacity-90 leading-relaxed">
                  We manage the entire construction process, ensuring every project is completed on time, within budget, and to the highest standards.
                </p>
                <button className="flex items-center space-x-2 text-white group">
                  <span className="underline">Learn more</span>
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-black/80 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Two Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Design & Build */}
            <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <Building className="w-12 h-12 mb-4 text-foreground stroke-[1.5]" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Design & build</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Our integrated design & build approach streamlines construction by handling architectural planning and a smooth workflow from concept to completion.
                  </p>
                  <button className="flex items-center space-x-2 text-foreground group">
                    <span className="underline">Learn more</span>
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-black/80 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project Management */}
            <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <ClipboardList className="w-12 h-12 mb-4 text-foreground stroke-[1.5]" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Project management</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We take charge of every detail, from budgeting and scheduling to risk management and quality control.
                  </p>
                  <button className="flex items-center space-x-2 text-foreground group">
                    <span className="underline">Learn more</span>
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-black/80 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;