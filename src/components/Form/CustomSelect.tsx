import { Controller } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/select";
import "./labelColor.css";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  customStyle?: string;
  disabled?: boolean;
  mode?: "multiple" | undefined; // multiple selection mode
  isLabelColor?: boolean;
  placeholder?: string;
};

const CustomSelect = ({
  label,
  name,
  options = [], // Default to an empty array
  disabled,
  mode,
  isLabelColor,
  placeholder,
}: TPHSelectProps) => {
  return (
    <div className={`${isLabelColor ? "custom-label" : ""}`}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            {label && (
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                {label}
              </label>
            )}

            <Select
              selectionMode={mode && "multiple"} // Use Next UI's multi-select mode
              disallowEmptySelection
              aria-label={label}
              size="lg"
              disabled={disabled}
              placeholder={placeholder}
              {...field}
              className={isLabelColor ? "custom-dropdown" : ""}
              onSelectionChange={(selected: any) => field.onChange(selected)}
            >
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>

            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </>
        )}
      />
    </div>
  );
};

export default CustomSelect;
