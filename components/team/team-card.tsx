// components/team/team-card.tsx
import { TeamMember } from '@/lib/types/team';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="w-full max-w-sm  border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
      <div className="flex flex-col items-center p-6 text-center">
        <div className="mb-4">
          {member.githubUrl + ".png" ? (
            <img
              src={member.avatarUrl ?? member.githubUrl + ".png"}
              alt={member.name}
              className="h-24 w-24 rounded-full border-4 border-white shadow-md"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <Github className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold">{member.name}</h3>
      </div>
      
      {member.bio && (
        <div className="px-6 pb-4">
          <p className="text-center text-sm leading-6">{member.bio}</p>
        </div>
      )}
      
      <div className="flex justify-center p-6 pt-0">
        <Link
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Github className="h-4 w-4" />
          Ver perfil no GitHub
          <ExternalLink className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
