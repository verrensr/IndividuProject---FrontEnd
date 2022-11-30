/* eslint-disable jsx-a11y/alt-text */
export default function Formtext_Fieldset() {
    return(
        <>
    <section>
      <p> <span>Apakah ada pertanyaan? </span>
        <input id="Ya" type="radio" name="pertanyaan?" defaultValue="Ya" />
        <label htmlFor="Ya">Ya</label> 
        <input id="Tidak" type="radio" name="pertanyaan?" defaultValue="Tidak" />
        <label htmlFor="Tidak">Tidak</label> </p>
    </section>
        </>
    )}