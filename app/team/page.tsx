// app/team/page.tsx
import { ContentShell } from "@/components/layout/content-shell";
import { PageTitle } from "@/components/typography";
import { TeamCard } from '@/components/team/team-card';
import { teamMembers } from '@/lib/data/team-members';

export default function TeamPage() {
  return (
    <ContentShell fullWidth className="p-14">
      <div className="mb-12 text-center">
        <PageTitle>Nossa Equipe</PageTitle>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </ContentShell>
  );
}
