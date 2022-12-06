import React, { useState } from "react";
import "./QualityFactor.css";

const QualityFactor = ({params, q_id, q_label, q_param_name}) => {
  const [value, setValue] = useState(0.5);
	const min = 0.1;
	const max = 6;

  const qf_id = Number(q_id);

  params[qf_id] = { "id": qf_id, "val": value, "name": q_param_name };

  console.log(params[qf_id]);

	const handleChange = (event) => {
		const number_validated = event.target.value.replace(/[^0-9.]/g, '');
		const result = Math.max(min, Math.min(max, number_validated));
		setValue(result);
	}

  return (
    <form>
			<table>
				<tr>
					<td className = "q_label">{q_label}</td>
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

export default QualityFactor;