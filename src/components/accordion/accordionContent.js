const AccordionContent = ({ children, expanded }) => {
  return <>{expanded && children}</>;
};

export default AccordionContent;
