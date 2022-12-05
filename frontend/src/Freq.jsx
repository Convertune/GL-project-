import React, { useState } from 'react';
import "./Freq.css";

const Freq = ({params, f_id, f_label, f_param_name}) => {
	const [value, setValue] = useState(20);
	const min = 20;
	const max = 22000;

	const freq_id = Number(f_id);

	params[freq_id] = { "id": freq_id, "val": value, "name": f_param_name };

	console.log(params[freq_id]);

	const handleChange = (event) => {
		const number_validated = event.target.value.replace(/\D/g, '');
		const result = Math.max(min, Math.min(max, number_validated));
		setValue(result);
	}

  return (
		<form>
			<table>
				<tr>
					<td className = "freq_label">{f_label}</td>
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