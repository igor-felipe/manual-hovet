// app/team/page.tsx
import { TeamCard } from '@/components/team/team-card';
import { teamMembers } from '@/lib/data/team-members';

export default function TeamPage() {
  return (
    <div className="p-14 rounded-xl bg-white">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Nossa Equipe</h1>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}