import FilterBar from "./FilterBar";

const Header: React.FC = () => {
  return (
    <main>
      <div className="bg-[var(--color-Desaturated-Dark-Cyan)]">
        <img
          src="../images/bg-header-desktop.svg"
          className="bg-center bg-auto"
          alt="bg"
        />
      </div>
      <FilterBar />
    </main>
  );
};

export default Header;
