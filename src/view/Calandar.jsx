/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"

import styles from "../css/formu.module.css"

const Calandar = function () {
  return (
    <>
      <h2 className={styles.titleCalandar}>Selection jour de livraison</h2>
      <hr />
      <br />
      <form className={styles.formCalandar}>
        <input type="radio" name="day" className="day" value="Lundi" />
        <label htmlFor="html">Lundi</label>
        <br />
        <hr />
        <input type="radio" name="day" className="day" value="Mardi" />
        <label htmlFor="html">Mardi</label>
        <br />
        <hr />
        <input type="radio" name="day" className="day" value="Mercredi" />
        <label htmlFor="html">Mercredi</label>
        <br />
        <hr />
        <input type="radio" name="day" className="day" value="Jeudi" />
        <label htmlFor="html">Jeudi</label>
        <br />
        <hr />
        <input type="radio" name="day" className="day" value="Vendredi" />
        <label htmlFor="html">Vendredi</label>
        <br />
        <hr />
        <br />
        <button type="submit" style={{ width: "100%", padding: "0.6rem" }}>
          Passer au paiement
        </button>
      </form>
    </>
  )
}

export default Calandar
