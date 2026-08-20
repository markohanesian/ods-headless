import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const STATIC_TEAM: TeamMember[] = [
  {
    name: "Mark Sarkis Ohanesian",
    role: "Founder & Lead Architect",
    bio: "Mark leads technical strategy and web application development at ODS. With senior-level experience engineering websites and apps for both private and government, he transforms complex business requirements into fast, durable digital assets.",
  },
  {
    name: "Astghik Stella Ohanesian",
    role: "Creative Direction & Media",
    bio: "Stella brings years of entrepreneurship to her creative direction across visual brand assets, video production, and media strategy, ensuring our technical builds match a clean visual brand.",
  },
  {
    name: "Christopher Ohanesian",
    role: "Visual Design",
    bio: "Chris brings years of experience from high-performance digital environments to craft intuitive user interfaces, clear layouts, and memorable brand identities.",
  },
];

const TeamSection = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4">
            Strategic Minds & Creative Builders
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {STATIC_TEAM.map((member) => (
            <div 
              key={member.name} 
              className="flex flex-col p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/20 hover:border-accent-blue/40 transition-colors"
            >
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                {member.name}
              </h3>
              
              <div className="label-mono text-accent-blue text-sm uppercase tracking-wider mb-6">
                {member.role}
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-light">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

