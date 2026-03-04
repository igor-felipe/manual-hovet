import Releases from "./releases.mdx";
import { ContentShell } from "@/components/layout/content-shell";

export default function Page() {
  return (
    <ContentShell prose fullWidth>
      <Releases />
    </ContentShell>
  );
}
