export function CircularBtn(props: {
  indexBtn: number;
  activePage: number;
  handlePagination: (index: number) => void;
}) {
  const { indexBtn, activePage, handlePagination } = props;
  return (
    <button
      className={`np-btn relative align-middle select-none font-sans font-middle text-center text-s text-[#F5F5F5] bg-[#30475e] uppercase transition-all rounded-full disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] hover:text-[#121212] hover:bg-gradient-to-br from-[#2b4055] to-[#334c65]
              ${
                activePage === indexBtn
                  ? "!shadow-[inset_6px_6px_12px_rgb(25,38,50),inset_-6px_-6px_12px_rgb(71,104,138)] !text-[#121212] font-bold"
                  : ""
              }`}
      type="button"
      onClick={() => handlePagination(indexBtn)}
    >
      {indexBtn}
    </button>
  );
}
