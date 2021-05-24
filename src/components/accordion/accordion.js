import useToggle from "../../hooks/useToggle";
import AccordionHeader from "./accordionHeader";
import AccordionContent from "./accordionContent";

const Accordion = ({children, header}) => {
  const {status: expanded, toggleStatus: toggleExpanded} = useToggle();

  return (
      <div>
        <AccordionHeader expanded={expanded} toggleExpanded={toggleExpanded}>
          {header}
        </AccordionHeader>
        <AccordionContent expanded={expanded}>{children}</AccordionContent>
      </div>
  );
};

export default Accordion;
