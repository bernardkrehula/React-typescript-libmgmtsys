import './SingleInput.css';
import { useState } from 'react';

type SingleInputType = {
  keyName?: string;
  variation: string; 
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputContentVariation?: string;
};

const SingleInput = ({
  keyName,
  variation,
  placeholder,
  value,
  onChange,
  inputContentVariation,
}: SingleInputType) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="input-area">
      {keyName === 'fine' && <div className="currency">$</div>}
      <input
        name={keyName}
        className={`single-input ${variation} ${isHovered ? 'hovered' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={typeof value === 'number' ? 'number' : 'text'}
        required
        disabled={keyName === 'id'}
        min={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {keyName === 'id' && <div className="add-label-line">Membership No.</div>}
      {keyName === 'fine' && <div className="add-label-line">Fine due *</div>}
      {value !== 0 && (
        <div className={`label-line ${inputContentVariation}`}>
          {/* {value} */}
        </div>
      )}
    </div>
  );
};

export default SingleInput;
