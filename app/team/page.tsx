// app/team/page.tsx
import { TeamCard } from '@/components/team/team-card';
import { teamMembers } from '@/lib/data/team-members';

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Nossa Equipe</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Conheça os colaboradores deste projeto
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}