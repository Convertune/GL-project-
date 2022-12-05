import React, { useState } from "react";
import "./FilterType.css";

const FilterType = ({params, t_id, t_param_name, t_label}) => {
	const [currentValue, setCurrentValue] = useState(0);

	const ft_id = Number(t_id);

	params[ft_id] = { "id": ft_id, "val": currentValue, "name": t_param_name };

	console.log(params[ft_id]);

	const handleChange = (event) => {
		setCurrentValue(Number(event.target.value));
	}

	return(
		<form>
			<table>
				<thead>
          <tr className = "ft_label">
            <th rowSpan={2}>{t_label}</th>
          </tr>
        </thead>
				<tr>
					<select id = "dropdown" onChange = {handleChange} value={currentValue} defaultValue={currentValue}>
						<option value={0}>LOWPASS</option>
						<option value={1}>HIGHPASS</option>
						<option value={2}>PEAK</option>
						<option value={3}>LOWSHELL</option>
						<option value={4}>HIGHSHELL</option>
						<option value={5}>DISABLE</option>
						<option value={6}>TOTAL_REGIMES</option>
					</select>
				</tr>
			</table>
		</form>
	)
}

export default FilterType;