import "./SingleInput.css";
import { useEffect, useState } from "react";

type SingleInputType = {
  keyName?: string;
  variation: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputContentVariation?: string;
  inputValue: number;
};

const SingleInput = ({
  keyName,
  variation,
  placeholder,
  value,
  inputContentVariation,
  inputValue,
  onChange
}: SingleInputType) => {
  const [isHovered, setHovered] = useState(false);
  const [ newValue, setValue ] = useState(value);

  const handleOnChange = (e) => {
    onChange(e);
    setValue(e.target.value)
  }
 
  return (
    <div className="input-area">
      {keyName === "fine" && <div className="currency">$</div>}
      <input
        name={keyName}
        className={`single-input ${variation} ${isHovered ? "hovered" : ""}`}
        placeholder={placeholder}
        value={keyName !== 'id' ? newValue : ''}
        onChange={handleOnChange}
        type={typeof value === "number" ? "number" : "text"}
        required
        disabled={keyName === "id"}
        min={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {keyName === "id" && <div className="add-label-line">Membership No.</div>}
      {keyName === "fine" && <div className="add-label-line">Fine due *</div>}
      {value !== 0 && (
        <div className={`label-line ${inputContentVariation}`}>
          {inputValue ? inputValue : keyName != 'fine' ? keyName : ''}
        </div>
      )}
    </div>
  );
};

export default SingleInput;
