export function PrevNextBtn(props: {
  variant: string;
  activePage: number;
  navigationFn: () => void;
  totalPages?: number;
  children: any;
}) {
  const { variant, activePage, navigationFn, children, totalPages } = props;
  return (
    <button
      className="np-btn flex items-center gap-2 rounded-full text-xs font-bold uppercase h-10 max-h-[40px] px-4 disabled:shadow-[inset_6px_6px_12px_rgb(25,38,50),inset_-6px_-6px_12px_rgb(71,104,138)] disabled:text-gray-900 hover:text-[#121212] hover:bg-gradient-to-br from-[#2b4055] to-[#334c65]"
      onClick={navigationFn}
      disabled={
        variant === "next" ? activePage === totalPages : activePage === 1
      }
    >
      {children}
    </button>
  );
}
