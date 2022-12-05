import React, { useState } from 'react';
import "./Freq.css";

const Freq = ({json, json_key, freq_label}) => {
	const [value, setValue] = useState(0);
	const min = 0;
	const max = 22000;

	json[json_key] = value;

	console.log(json);

	const handleChange = (event) => {
		const number_validated = event.target.value.replace(/\D/g, '');
		const result = Math.max(min, Math.min(max, number_validated));
		setValue(result);
	}

  return (
		<form>
			<table>
				<tr>
					<td className = "freq_label">{freq_label}</td>
					<td>
						<input 
							value={value} 
							onChange={handleChange}
							type="text" 
						/>
					</td>
				</tr>
			</table> 
		</form>
	)
}

export default Freq;