"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import fetchContactResult from "@/hook/fetchContactResult";

export default function FormContact({ form }: any) {
  const searchParams = useSearchParams();
  const titleFromUrl = searchParams.get("title") || "";

  const [formData, setFormData] = useState<any>({});
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<any[]>([]);

  const handleChange = (name: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("");
    setErrors([]);

    // ------------------ Client-side validate required ------------------
    const missingRequired = form.fields.filter(
      (f: any) => f.type.includes("*") && !formData[f.name]
    );
    if (missingRequired.length > 0) {
      setErrors([
        { field: missingRequired[0].name, message: form.messages.invalid_required },
      ]);
      return;
    }

    // ------------------ Client-side validate email ------------------
    form.fields.forEach((f: any) => {
      if (f.basetype === "email" && formData[f.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[f.name])) {
          setErrors([{ field: f.name, message: form.messages.invalid_email }]);
          return;
        }
      }
    });

    // ------------------ Send form to server ------------------
    const result = await fetchContactResult(form.id, formData);

    if (result.status === "validation_failed") {
      const fieldErrors =
        result.invalidFields?.map((f: any) => ({
          field: f.name,
          message: form.messages[f.code] || f.message || form.messages.validation_error,
        })) || [];
      setErrors(fieldErrors);
    } else if (result.status === "success") {
      setErrors([]);
      setStatus(form.messages.mail_sent_ok || result.message);
      setFormData({});
      e.target.reset();
    } else {
      setErrors([]);
      setStatus(result.message || form.messages.mail_sent_ng || "Something went wrong.");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    if (titleFromUrl) {
      setFormData((prev: any) => ({ ...prev, applySubject: titleFromUrl }));
    }
  }, [titleFromUrl]);

  return (
    <form onSubmit={handleSubmit} className="form">
      {form.fields.map((field: any, idx: any) => {
        const fieldError = errors.find((err) => err.field === field.name);

        if (field.basetype === "text") {
          return (
            <div
              key={idx}
              className={`group w-full ${field.name !== "applyName" && "lg:w-[calc(50%-10px)]"}`}
            >
              <div className="lable mb-1.5 text-xs">{field.values[1]}</div>
              <input
                type={field.basetype}
                name={field.name}
                placeholder={field.values[0]}
                className="border border-[#ffffff26] rounded-lg w-full text-xs p-2.5"
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
              {fieldError && (
                <p className="text-red-500 text-xs mt-1">{fieldError.message}</p>
              )}
            </div>
          );
        }

        if (field.basetype === "email") {
          return (
            <div
              key={idx}
              className={`group w-full`}
            >
              <div className="lable mb-1.5 text-xs">{field.values[1]}</div>
              <input
                type={field.basetype}
                name={field.name}
                placeholder={field.values[0]}
                className="border border-[#ffffff26] rounded-lg w-full text-xs p-2.5"
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
              {fieldError && (
                <p className="text-red-500 text-xs mt-1">{fieldError.message}</p>
              )}
            </div>
          );
        }

        if (field.basetype === "textarea") {
          return (
            <div key={idx} className="group w-full">
              <div className="lable mb-1.5 text-xs">{field.values[1]}</div>
              <textarea
                name={field.name}
                placeholder={field.values[0]}
                className="border border-[#ffffff26] rounded-lg w-full h-32 text-xs p-2.5"
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
              {fieldError && (
                <p className="text-red-500 text-xs mt-1">{fieldError.message}</p>
              )}
            </div>
          );
        }

        if (field.basetype === "hidden") {
          return (
            <input
              key={idx}
              type="hidden"
              name={field.name}
              value={
                field.name === "applySubject"
                  ? titleFromUrl || formData[field.name] || ""
                  : formData[field.name] || ""
              }
              // value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          );
        }

        if (field.basetype === "submit") {
          return (
            <div key={idx} className="group w-full text-center">
              <button
                type="submit"
                className="cursor-pointer text-sm py-2 px-10 rounded-lg capitalize bg-white hover:bg-white/25 text-black hover:backdrop-filter-[blur(10px)] hover:text-white font-semibold shadow-lg transition duration-300"
              >
                {field.values[0]}
              </button>
            </div>
          );
        }

        return null;
      })}

      {status && <div className="text-green-600 text-sm mt-2 text-center w-full">{status}</div>}
    </form>
  );
}
