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
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 uppercase">
            Our_Core_Values
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {VALUES.map((value) => (
            <div key={value.id} className="relative">
              <div className="text-[6rem] font-bold text-zinc-100 dark:text-zinc-900/50 absolute -top-12 -left-4 select-none -z-10">
                {value.id}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight relative z-10">
                {value.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
