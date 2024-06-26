export const fromCamelToRegular = (string: string): string => {
  return (
    string
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
  );
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const prepareDataForModal = (object: object) => {
  interface templateObject {
    label: string;
    name: string;
    value?: string | number | null;
    type: string;
  }
  let preparedArray = [];
  let contor = 0;
  for (const [key, value] of Object.entries(object)) {
    const template: templateObject = {
      label: capitalizeFirstLetter(key),
      name: key,
      value: null,
      type: "",
    };

    if (Array.isArray(value)) {
      template.type = "multiple";
    }

    if (value) {
      template.value = value;
    } else {
      delete template.value;
    }
    if (typeof value === "string" && key !== "description") {
      template.type = "text";
    }

    if (typeof value === "string" && key === "description") {
      template.type = "textarea";
    }
    if (typeof value === "number") {
      template.type = "number";
    }
    if (key === "email") {
      template.type = "email";
    }
    preparedArray.push(template);
  }

  return preparedArray;
};

export const removeId = (object: any) => {
  const objectCopy = { ...object };
  delete objectCopy._id;

  return objectCopy;
};
