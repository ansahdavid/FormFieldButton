import * as React from "react";

// The different field types
type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
    // Unique field name
    id: string;
  
    // Label text for field
    label?: string;
  
    // The editor for the field
    editor?: Editor;
  
    // The drop down items for the field
    options?: string[];
  
    // The field value
    value?: any;

    // The function to provide link to new page
    // linkfunction?: () => void;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
    id,
    label,
    editor,
    options,
    value,
    // url
  }) => {
    return (
      <div className="form-group">
        {label && <label htmlFor={id}>{label}</label>}
  
        {editor!.toLowerCase() === "textbox" && (
          <input
            id={id}
            type="text"
            value={value}
            onChange={
              (e: React.FormEvent<HTMLInputElement>) =>
                console.log(e) // TODO: push change to form values
            }
            onBlur={
              (e: React.FormEvent<HTMLInputElement>) =>
                console.log(e) // TODO: validate field value
            }
            className="form-control"
          />
        )}
  
        {editor!.toLowerCase() === "multilinetextbox" && (
          <textarea
            id={id}
            value={value}
            onChange={
              (e: React.FormEvent<HTMLTextAreaElement>) =>
                console.log(e) // TODO: push change to form values
            }
            onBlur={
              (e: React.FormEvent<HTMLTextAreaElement>) =>
                console.log(e) // TODO: validate field value
            }
            className="form-control"
          />
        )}
  
        {editor!.toLowerCase() === "dropdown" && (
          <select
            id={id}
            name={id}
            value={value}

            // onClick={
            //   (e: React.FormEvent<HTMLSelectElement>) =>
            //     url
            // }
            onChange={
              (e: React.FormEvent<HTMLSelectElement>) =>
                console.log(e) // TODO: push change to form values
            }
            onBlur={
              (e: React.FormEvent<HTMLSelectElement>) =>
                console.log(e) // TODO: validate field value
            }
            className="form-control"
          >
            {options &&
              options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        )}
  
        {/* TODO - display validation error */}
      </div>
    );
  };

  Field.defaultProps = {
    editor: "textbox"
  };