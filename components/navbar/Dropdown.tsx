import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const options = ["NextJS", "ReactJS", "Python", "Godot4", "Php"]

const Dropdown = () => {
  return (
<Select>
  <SelectTrigger className="w-3/4 md:w-[400px] lg:w-[500px]">
    <SelectValue placeholder="Languages" />
  </SelectTrigger>
  <SelectContent>
    {options.map((option, id) => (
      <SelectItem key={id} value={option}>{option}</SelectItem>
    ))}
  </SelectContent>
</Select>

  )
}

export default Dropdown

