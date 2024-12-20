import { type FormInputProps } from "@/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function FormInput({ label, name, type, defaultValue }: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        className="mt-2"
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default FormInput
