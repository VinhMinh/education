export default function Content({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  
  return (
    <section className={`${containers} ${classContainers} pb-20 flex items-center justify-end overflow-hidden position-${position}`}>
      {data?.editor && (
        <div className="editorContent text-base leading-none" dangerouslySetInnerHTML={{ __html: data?.editor }} />
      )}
    </section>
  );
}
