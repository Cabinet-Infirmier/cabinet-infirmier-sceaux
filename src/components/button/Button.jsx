function Button({ onClick, children, type = "primary" }) {
  const base =
    "cursor-pointer transition-all text-white px-6 py-2 rounded-3xl border-b-[4px] hover:brightness-90 hover:-translate-y-[1px] hover:border-b-[6px] active:border-[2px] active:brightness-50 active:translate-y-[2px]";

  const styles = {
    primary: base + " bg-[#E5BBBB] border-[#e3a3a3] ",
    secondary: base + " bg-[#c8c8c8] border-[#929191] ",
  };
  return (
    <div className="h-[100px]">
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
