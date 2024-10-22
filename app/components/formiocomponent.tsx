"use client";
import { Form } from "@formio/react";

function FormIoComponent() {
    const formData = {
        display: "form",
        settings: {
          pdf: {
            id: "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            src: "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
          },
        },
        components: [
          {
            label: "Checkbox",
            tableView: false,
            validateWhenHidden: false,
            key: "checkbox",
            type: "checkbox",
            input: true,
          },
          {
            label: "Text Field",
            applyMaskOn: "change",
            tableView: true,
            validateWhenHidden: false,
            key: "textField",
            type: "textfield",
            input: true,
          },
          {
            type: "button",
            label: "Submit",
            key: "submit",
            disableOnInvalid: true,
            input: true,
            tableView: false,
          },
        ],
      };

  return (
    <>
      <Form form={formData} />
    </>
  );
}

export default FormIoComponent;
