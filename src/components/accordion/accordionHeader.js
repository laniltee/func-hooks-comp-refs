import {AccordionContext} from "./accordion";
import {useContext} from "react";

const AccordionHeader = ({children}) => {
  const {expanded, toggleExpanded} = useContext(AccordionContext);

  return (
      <button onClick={toggleExpanded}>
        {children} <span>{expanded ? "-" : "+"}</span>
      </button>
  );
};

export default AccordionHeader;
