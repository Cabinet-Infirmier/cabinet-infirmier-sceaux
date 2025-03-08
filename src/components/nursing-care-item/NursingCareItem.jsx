import { Cross } from "lucide-react";

function NursingCareItem({ children }) {
  return (
    <div className="flex mt-2">
      <div>
        <Cross color="#d1a7a7" fill="#d1a7a7" />
      </div>

      <span className="ml-3 text-[18px]">{children}</span>
    </div>
  );
}

export default NursingCareItem;
