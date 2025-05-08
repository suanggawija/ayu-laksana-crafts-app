import { InputProps } from "@/types/interface/Input";

export const FormInput: React.FC<InputProps> = ({
  id,
  name,
  title,
  type,
  value,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-semibold text-gray-600">
        {title}
      </label>
      <input
        className="text-sm p-2 mt-1 border border-gray-300 rounded"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required || false}
      />
    </div>
  );
};

export const FormInputTextArea: React.FC<InputProps> = ({
  id,
  name,
  title,
  value,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-semibold text-gray-600">
        {title}
      </label>
      <textarea
        className="text-sm p-2 mt-1 border border-gray-300 rounded"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required || false}
      />
    </div>
  );
};
