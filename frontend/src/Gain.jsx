import React, { useState } from 'react';
import "./Gain.css";

const Gain = ({json, json_key}) => {
	const [value, setValue] = useState(0);
	const min = -3;
	const max = 3;

	json[json_key] = value;

	console.log(json);

	const handleChange = (event) => {
		//const number_validated = event.target.value.replace(/^(-)|[^0-9]+/g, '$1');
		//const result = Math.max(min, Math.min(max, number_validated));
		setValue(Number(event.target.value));
	}

  return (
		<form> 
			<table>
        <tr>
          <td>
            <input 
              value={value} 
              onChange={handleChange}
              type="range"
              min = {min}
              max = {max}
            />
          </td>
          <td className = "gain_output">{value}</td>
        </tr>
      </table>
		</form>
	)
}

export default Gain;