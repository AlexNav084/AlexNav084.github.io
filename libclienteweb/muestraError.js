import { ProblemDetailsError } from "./ProblemDetailsError.js"

/**
 * Muestra los datos de una Error en la consola y en un cuadro de alerta.
 * @param { unknown } error descripción del error.
 */
export function muestraError(error) {

 if (error instanceof ProblemDetailsError) {
  // Forzamos al validador a entender que aquí 'error' ya es la instancia correcta
  /** @type {ProblemDetailsError} */
  const miError = error;
  const problemDetails = miError.problemDetails

  let mensaje =
   typeof problemDetails["title"] === "string" ? problemDetails["title"] : ""
  if (typeof problemDetails["detail"] === "string") {
   if (mensaje !== "") {
    mensaje += "\n"
   }
   mensaje += problemDetails["detail"]
  }
  if (mensaje === "") {
   mensaje = "Error"
  }
  console.error(miError, problemDetails)
  alert(mensaje)

 } else if (
  typeof error === "object" && error !== null && "message" in error
 ) {

  console.error(error)
  // Usamos una notación segura para objetos desconocidos con propiedad 'message'
  alert(/** @type {Object<string, any>} */(error).message)

 } else {

  console.error("Error", error)
  alert("Error")

 }
}