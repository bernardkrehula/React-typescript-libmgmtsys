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
  isAddBtnClicked: string;
};

const SingleInput = ({
  keyName,
  variation,
  placeholder,
  value,
  inputContentVariation,
  inputValue,
  onChange,
  isAddBtnClicked
}: SingleInputType) => {
  const [ isHovered, setHovered ] = useState(false);
  const [ newValue, setValue ] = useState(value);
  const [status, setStatus] = useState(value);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onChange(e);
    setStatus(e.target.value);
    console.log(value)
    setValue(value)
  }
 
  return (
    <div className="input-area">
      {keyName != 'status' ? <>
        {keyName === 'fine' && <div className="currency">$</div>}
        <input
          name={keyName}
          className={`single-input ${variation} ${isHovered ? "hovered" : ""}`}
          placeholder={placeholder}
          value={keyName !== 'id' ? (newValue ?? '') : ''}
          onChange={handleOnChange}
          type={keyName === "fine" ? "number" : "text"}
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
            {inputValue || isAddBtnClicked ? inputValue : keyName != 'fine' ? keyName : value}
          </div>
        )}</>
        :
        <>
          <div className="checkBtns">
            <label className="label-btn">
              <input
                name={keyName}
                type="radio"
                value="Available"
                checked={status === "Available"}
                onChange={handleOnChange}
                className="checkBtn"
              />
              <span>Available</span>
            </label>

            <label className="label-btn">
              <input
                name={keyName}
                type="radio"
                value="Issued"
                checked={status === "Issued"}
                onChange={handleOnChange}
                className="checkBtn"
              />
              <span>Issued</span>
            </label>
          </div>
        </>
      }
    </div>
  );
};

export default SingleInput;
