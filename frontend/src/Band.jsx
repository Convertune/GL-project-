import React from 'react';
import "./Band.css";
import FilterType from './FilterType';
import Freq from "./Freq";
import Gain from "./Gain";
import QualityFactor from './QualityFactor';

const Band = ({
  params, 
  g_id, g_label, g_param_name, 
  f_id, f_label, f_param_name, f_start_value,
  b_label,
  q_id, q_label, q_param_name,
  t_id, t_param_name, t_label
}) => {
  return (
    <table>
      <tr className = "band_label">{b_label}</tr>
      <tr>
        <td>
          <Freq 
            params = {params} 
            f_id = {f_id} 
            f_start_value = {f_start_value}
            f_label = {f_label} 
            f_param_name = {f_param_name}
          />
        </td>
      </tr>
      <tr>
        <td>
          <QualityFactor 
            params = {params} 
            q_id = {q_id}
            q_label = {q_label}
            q_param_name = {q_param_name}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Gain 
            params={params} 
            g_id = {g_id} 
            g_label = {g_label}
            g_param_name = {g_param_name}
          />
        </td>
      </tr>
      <tr>
        <td>
          <FilterType 
            params={params} 
            t_id = {t_id} 
            t_label = {t_label}
            t_param_name = {t_param_name}
          />
        </td>
      </tr>
    </table>
  )
}

export default Band;