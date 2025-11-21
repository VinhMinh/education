import FormContact from "@/components/Form";
import fetchContactData from "@/hook/fetchContactData";

export default async function ContactForm({position,data}:any) {
  
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  const dataContact = await fetchContactData(data.contactForm);
  
  return (
    <section className={`${containers} ${classContainers} pt-10 pb-10 lg:pb-20 flex items-center justify-end overflow-hidden position-${position}`}>
      <div className="w-full text-center">
        {dataContact?.title && (
          <h2 className="text-4xl lg:text-[56px] font-extrabold leading-tight mb-5">
            {dataContact?.title}
          </h2>
        )}
        <FormContact form={dataContact} />
      </div>
    </section>
  );
}
