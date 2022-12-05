import React from "react";
import Band from "./Band";
import ConvertButton from "./ConvertButton";
import "./Form.css";

const Form = () => { 

	const obj = {};
 
	return (
		<><div className = "my_header">
			<h1>Convertune</h1>
		</div>
		<table className="center">
			<tr>
				<th>
					<Band
						band_label='Band 1'
						obj={obj}
						json_freq_key='freq1'
						json_gain_key='gain1'
						freq_label='F1' />
				</th>
				<th>
					<Band
						band_label='Band 2'
						obj={obj}
						json_freq_key='freq2'
						json_gain_key='gain2'
						freq_label='F2' />
				</th>
				<th>
					<Band
						band_label='Band 3'
						obj={obj}
						json_freq_key='freq3'
						json_gain_key='gain3'
						freq_label='F3' />
				</th>
				<th>
					<Band
						band_label='Band 4'
						obj={obj}
						json_freq_key='freq4'
						json_gain_key='gain4'
						freq_label='F4' />
				</th>
			</tr>
			<tr>
				<th>
					<Band
						band_label='Band 5'
						obj={obj}
						json_freq_key='freq5'
						json_gain_key='gain5'
						freq_label='F5' />
				</th>
				<th>
					<Band
						band_label='Band 6'
						obj={obj}
						json_freq_key='freq6'
						json_gain_key='gain6'
						freq_label='F6' />
				</th>
				<th>
					<Band
						band_label='Band 7'
						obj={obj}
						json_freq_key='freq7'
						json_gain_key='gain7'
						freq_label='F7' />
				</th>
				<th>
					<Band
						band_label='Band 8'
						obj={obj}
						json_freq_key='freq8'
						json_gain_key='gain8'
						freq_label='F8' />
				</th>
			</tr>
		</table>
		<div className='Button'>
			<ConvertButton obj = {obj}/>
		</div>
		</> 
	); 
};

export default Form;