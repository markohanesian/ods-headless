import React from 'react';

const VALUES = [
  {
    title: "Transparent Engagements",
    description: "We believe in clarity from concept to completion. Our commitment to transparent pricing and defined project scopes ensures you have full visibility and peace of mind throughout our collaboration.",
    id: "01"
  },
  {
    title: "Strategic Timelines",
    description: "In the dynamic digital landscape, timing is paramount. We adhere to rigorous project timelines, ensuring timely delivery that aligns with your business objectives and maintains your market momentum.",
    id: "02"
  },
  {
    title: "Agile Execution",
    description: "Experience seamless progression from vision to launch. Our streamlined, agile processes are designed for efficient project realization, optimizing speed without compromising on quality or strategic intent.",
    id: "03"
  }
];

const CoreValues = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4 uppercase">
            Our Core Values
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {VALUES.map((value) => (
            <div key={value.id} className="flex gap-8 group">
              <div className="flex-shrink-0">
                <div className="text-4xl md:text-5xl font-bold text-zinc-200 dark:text-zinc-800 group-hover:text-brand transition-colors duration-500 font-mono tracking-tighter">
                  {value.id}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="!text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 !text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
