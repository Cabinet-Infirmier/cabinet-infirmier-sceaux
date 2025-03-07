import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <div className="h-[100px]">
      <button
        className="cursor-pointer transition-all bg-[#E5BBBB] text-white px-6 py-2 rounded-3xl
border-[#e3a3a3]
border-b-[4px] hover:brightness-90 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-50 active:translate-y-[2px]"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
