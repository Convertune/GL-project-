import React, { useState } from 'react';
import "./Gain.css";

const Gain = ({params, g_id, g_param_name, g_label}) => {
	const [value, setValue] = useState(0);
	const min = -20;
	const max = 6;

  const gain_id = Number(g_id);

  params[gain_id] = { "id": gain_id, "val": value, "name": g_param_name };

	const handleChange = (event) => {
		//const number_validated = event.target.value.replace(/^(-)|[^0-9]+/g, '$1');
		//const result = Math.max(min, Math.min(max, number_validated));
		setValue(Number(event.target.value));
	}

  return (
		<form> 
			<table>
        <thead>
          <tr className = "gain_label">
            <th colSpan={2}>{g_label}</th>
          </tr>
        </thead>  
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