const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="bg-primary text-white rounded-lg p-8 text-center min-w-[200px]">
            <div className="text-4xl font-bold mb-2">147</div>
            <div className="text-lg">Completed Projects</div>
          </div>
          
          <div className="bg-primary text-white rounded-lg p-8 text-center min-w-[200px]">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Partner logos */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded">
              <span className="text-gray-600 font-medium">Topgearment</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded">
              <span className="text-gray-600 font-medium">Logoacount</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded">
              <span className="text-gray-600 font-medium">Topgearment</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded">
              <span className="text-gray-600 font-medium">Topgearment</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded">
              <span className="text-gray-600 font-medium">Topgearment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;