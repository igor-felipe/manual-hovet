export const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mt-8 mb-4">
    {children}
  </h1>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 mt-10 mb-4">
    {children}
  </h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3">
    {children}
  </h3>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-4">{children}</p>
);

export const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
);

export const OL = ({
  children,
  startNumber,
}: {
  children: React.ReactNode;
  startNumber?: number;
}) => (
  <ol
    className="my-6 ml-6 list-decimal [&>li]:mt-2"
    {...(startNumber && { start: startNumber })}
  >
    {children}
  </ol>
);

export const LI = ({ children }: { children: React.ReactNode }) => (
  <li>{children}</li>
);
