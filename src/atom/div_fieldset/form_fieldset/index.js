/* eslint-disable jsx-a11y/alt-text */
export default function Form_Fieldset() {
    return(
        <>
    <form>
      <label htmlFor="guests">Enter a number between 1-10 how interesting this page:</label>
      <input id="guests" name="guests" type="number" min={1} max={10} />
      <input type="submit" defaultValue="Submit" />
    </form>
        </>
    )}