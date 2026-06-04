import React from 'react';
import { getTeamMembers, PortfolioItem } from '@/lib/wordpress';

const TeamSection = async () => {
  let members: PortfolioItem[] = [];
  
  try {
    members = await getTeamMembers();
  } catch (error) {
    console.error("Failed to load team members:", error);
  }

  if (members.length === 0) return null;

  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="uppercase mb-4">Our Team</h2>
          <p className="text-zinc-500 dark:text-zinc-300 label-mono">
            Strategic Minds & Creative Architects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {members.map((member) => (
            <div key={member.slug} className="flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <h3 className="!text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {member.title}
                </h3>
                <div className="flex-grow border-t border-zinc-100 dark:border-zinc-900"></div>
              </div>
              
              <div className="label-mono text-accent-blue mb-6">
                {member.excerpt || "Strategic Partner"}
              </div>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {member.content || "Expertise in digital architecture and strategic execution."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
