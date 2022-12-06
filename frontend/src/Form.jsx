import React from "react";
import Band from "./Band";
import ConvertButton from "./ConvertButton";
import "./Form.css";

const Form = () => { 

  const params = [];

  const json = { "eq_params": params };
 
	return (
		<><div className = "my_header">
			<h1>Convertune</h1>
		</div>
		<table className="center">
			<tr>
				<th>
					<Band
            params = {params}
						b_label='Band 1'
            f_id='0'
						f_param_name='1_freq'
						f_label='F1'
            f_start_value='125'
            g_id='1'
            g_param_name='1_qain'
            g_label = 'Gain 1'  
            q_id='2'
            q_param_name='1_Q'
            q_label = 'Q1'
            t_id='3'
            t_param_name='1_type'
            t_label = 'Filter type 1'
          />
				</th>
				<th>
        <Band
            params = {params}
						b_label='Band 2'
            f_id='4'
						f_param_name='2_freq'
						f_label='F2'
            f_start_value='250'
            g_id='5'
            g_param_name='2_qain' 
            g_label = 'Gain 2' 
            q_id='6'
            q_param_name='2_Q'
            q_label = 'Q2'
            t_id="7"
            t_param_name="2_type"
            t_label = 'Filter type 2'
          />
				</th>
				<th>
        <Band
            params = {params}
						b_label='Band 3'
            f_id='8'
						f_param_name='3_freq'
						f_label='F3'
            f_start_value='500'
            g_id='9'
            g_param_name='3_qain'
            g_label = 'Gain 3'  
            q_id='10'
            q_param_name='3_Q'
            q_label = 'Q3'
            t_id="11"
            t_param_name="3_type"
            t_label = 'Filter type 3'
          />
				</th>
				<th>
        <Band
            params = {params}
						b_label='Band 4'
            f_id='12'
						f_param_name='4_freq'
						f_label='F4'
            f_start_value='1000'
            g_id='13'
            g_param_name='4_qain'
            g_label = 'Gain 4'  
            q_id='14'
            q_param_name='4_Q'
            q_label = 'Q4'
            t_id="15"
            t_param_name="4_type"
            t_label = 'Filter type 4'
          />
				</th>
        <th>
        <Band
            params = {params}
						b_label='Band 5'
            f_id='16'
						f_param_name='5_freq'
						f_label='F5'
            f_start_value='2000'
            g_id='17'
            g_param_name='5_qain'
            g_label = 'Gain 5'  
            q_id='18'
            q_param_name='5_Q'
            q_label = 'Q5'
            t_id="19"
            t_param_name="5_type"
            t_label = 'Filter type 5' 
          />
				</th>
			</tr>
			<tr>
				<th>
        <Band
            params = {params}
						b_label='Band 6'
            f_id='20'
						f_param_name='6_freq'
						f_label='F6'
            f_start_value='4000'
            g_id='21'
            g_param_name='6_qain'
            g_label = 'Gain 6'  
            q_id='22'
            q_param_name='6_Q'
            q_label = 'Q6'
            t_id="23"
            t_param_name="6_type"
            t_label = 'Filter type 6' 
          />
				</th>
				<th>
        <Band
            params = {params}
						b_label='Band 7'
            f_id='24'
						f_param_name='7_freq'
						f_label='F7'
            f_start_value='8000'
            g_id='25'
            g_param_name='7_qain'
            g_label = 'Gain 7'  
            q_id='26'
            q_param_name='7_Q'
            q_label = 'Q7'
            t_id="27"
            t_param_name="7_type"
            t_label = 'Filter type 7' 
          />
				</th>
				<th>
        <Band
            params = {params}
						b_label='Band 8'
            f_id='28'
						f_param_name='8_freq'
						f_label='F8'
            f_start_value='12000'
            g_id='29'
            g_param_name='8_qain'
            g_label = 'Gain 8'  
            q_id='30'
            q_param_name='8_Q'
            q_label = 'Q8'
            t_id="31"
            t_param_name="8_type"
            t_label = 'Filter type 8' 
          />
				</th>
        <th>
        <Band
            params = {params}
						b_label='Band 9'
            f_id='32'
						f_param_name='9_freq'
						f_label='F9'
            f_start_value='14000'
            g_id='33'
            g_param_name='9_qain'
            g_label = 'Gain 9'  
            q_id='34'
            q_param_name='9_Q'
            q_label = 'Q9'
            t_id="35"
            t_param_name="9_type"
            t_label = 'Filter type 9' 
          />
				</th>
        <th>
        <Band
            params = {params}
						b_label='Band 10'
            f_id='36'
						f_param_name='10_freq'
						f_label='F10'
            f_start_value='18000'
            g_id='37'
            g_param_name='10_qain'
            g_label = 'Gain 10'  
            q_id='38'
            q_param_name='10_Q'
            q_label = 'Q10'
            t_id="39"
            t_param_name="10_type"
            t_label = 'Filter type 10' 
          />
				</th>
			</tr>
		</table>
		<div className='Button'>
			<ConvertButton obj = {json}/>
		</div>
		</> 
	); 
};

export default Form;