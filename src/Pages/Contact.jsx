import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "Eshmat",
      subject: "react hook form",
      email: "eshmat@gmail.com",
    },
  });

  function handleFormSubmit(data) {
    console.log(data);
    // axios.post("/api/user", data)
  }

  // console.log(errors);

  console.log(getValues());

  return (
    <div>
      Contact
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <input
            type="text"
            {...register("name", {
              required: "Bu maydon majburiy",
              minLength: {
                value: 8,
                message: "Kamida 8ta belgidan foydalaning",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
          <p>{watch("name")}</p>
        </div>
        <div>
          <input type="text" {...register("subject")} />
          <p style={{ color: "red" }}>{errors.subject?.message}</p>
        </div>
        <div>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value: /^[a-z]{3}?@[a-z]{3}.[a-z]{3}/,
                message: "Noto'g'ri email.",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
