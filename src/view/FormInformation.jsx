import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import ShoppingList from "../components/ShoppingList"
import Input from "../components/Input"
import styles from "../css/formu.module.css"

const FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  postalCode: "",
  getNewsAndOffre: false,
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Minimum 2 caractères !")
    .max(50, "Too Long!")
    .required("Champ obligatoire"),
  lastName: Yup.string()
    .min(2, "Minimum 2 caractères !")
    .max(50, "Too Long!")
    .required("Champ obligatoire"),
  email: Yup.string().email("Invalid email").required("Champ obligatoire"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Champ obligatoire"),
  address: Yup.string()
    .min(6, "Minimum 2 caractères !")
    .max(50, "Too Long!")
    .required("Champ obligatoire"),
  postalCode: Yup.string()
    .length(5, "Ce champ doit contenir 5 caractères")
    .matches(/^[0-9]{5}/)
    .required("Champ obligatoire")
    .label("Code Postal"),
  getNewsAndOffre: Yup.boolean(),
})

const FormInformation = function ({
  products,
  productsQte,
  addOrRemoveProduct,
  expensive,
}) {
  const history = useHistory()

  const handleSubmit = (values) => {
    expensive(values)
    history.push("/calandar")
  }

  return (
    <div>
      <ShoppingList
        products={products}
        productsQte={productsQte}
        addOrRemoveProduct={addOrRemoveProduct}
      />

      <Formik
        initialValues={FormValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={styles.formu}>
            <h2 style={{ color: "#ffffff", textAlign: "center" }}>
              Adresse de livraison
            </h2>

            <div>
              <label htmlFor="getNewsAndOffre" style={{ color: "#ffeb3b" }}>
                <input
                  type="checkbox"
                  id="getNewsAndOffre"
                  name="getNewsAndOffre"
                />
                Recevez des nouvelles et des offres
              </label>
            </div>
            <br />
            <div>
              <Input textDisplay="Prénom" name="firstName" type="text" />
            </div>
            <br />
            <div>
              <Input textDisplay="Nom de famille" name="lastName" type="text" />
            </div>
            <br />
            <div>
              <Input textDisplay="Email" name="email" type="text" />
            </div>
            <br />
            <div>
              <Input textDisplay="Téléphone" name="phone" type="text" />
            </div>
            <br />
            <div>
              <Input textDisplay="Addresse" name="address" type="text" />
            </div>
            <br />
            <div>
              <Input textDisplay="Code postal" name="postalCode" type="text" />
            </div>
            <br />
            <button
              type="submit"
              style={{ width: "100%", padding: "0.6rem" }}
              disabled={!formik.isValid || !formik.dirty}
            >
              Envoyer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

/* eslint react/prop-types: 0 */

export default FormInformation
