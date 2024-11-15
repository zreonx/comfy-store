import { type FormProps } from "@/utils";
import { Label } from "./ui/label"
import { Checkbox } from "@/components/ui/checkbox"

function FormCheckbox({name, label, defaultValue}: FormProps) {
  const defaultChecked = defaultValue === 'on' ? true : false;
  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">{label || name}</Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked}/>
    </div>
  )
}

export default FormCheckbox
