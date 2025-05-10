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
        {title} <span className="text-red-500">{required ? "*" : ""}</span>
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

// export const FormInputSelect: React.FC<InputProps> = ({
//   id,
//   name,
//   title,
//   value,
//   onChange,
//   required,
// }) => {
//   <div className="">
//     <label htmlFor={id}>{title}</label>
//     <select
//       name={name}
//       id={id}
//       value={value}
//       onChange={onChange}
//       required={required || false}
//     >
//       <option value="" disabled>
//         Select a {title}
//       </option>
//       {productCategories.map((category) => {
//         return (
//           <option key={category.id} value={category.id}>
//             {category.name}
//           </option>
//         );
//       })}
//     </select>
//   </div>;
// };
