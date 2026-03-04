import Home from "./home.mdx";
import { ContentShell } from "@/components/layout/content-shell";

export default function Page() {
  return (
    <ContentShell prose>
      <Home />
    </ContentShell>
  );
}
