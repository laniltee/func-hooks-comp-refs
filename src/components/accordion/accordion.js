import useToggle from "../../hooks/useToggle";
import AccordionHeader from "./accordionHeader";
import AccordionContent from "./accordionContent";
import {createContext} from "react";

export const AccordionContext = createContext();
const {Provider} = AccordionContext;

const Accordion = ({children, header}) => {
  const {status: expanded, toggleStatus: toggleExpanded} = useToggle();

  const value = {
    expanded,
    toggleExpanded
  };

  return (
      <Provider value={value}>
        <div>
          <AccordionHeader expanded={expanded} toggleExpanded={toggleExpanded}>
            {header}
          </AccordionHeader>
          <AccordionContent expanded={expanded}>{children}</AccordionContent>
        </div>
      </Provider>
  );
};

export default Accordion;
