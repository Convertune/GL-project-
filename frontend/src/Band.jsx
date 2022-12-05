import React from 'react';
import "./Band.css";
import Freq from "./Freq";
import Gain from "./Gain";

const Band = ({obj, json_gain_key, json_freq_key, freq_label, band_label}) => {
  return (
    <table>
      <tr className = "band_label">{band_label}</tr>
      <tr>
        <td><Freq json = {obj} json_key = {json_freq_key} freq_label = {freq_label}/></td>
      </tr>
      <tr>
        <td><Gain json = {obj} json_key = {json_gain_key}/></td>
      </tr>
    </table>
  )
}

export default Band;