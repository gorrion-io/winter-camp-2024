import NameHeader from "@/components/nameHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NameHeader />
      <main>{children}</main>
    </>
  );
}
