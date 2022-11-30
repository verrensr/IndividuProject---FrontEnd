/* eslint-disable react/jsx-pascal-case */
import Form_Fieldset from "../../atom/div_fieldset/form_fieldset";
import Formtext_Fieldset from "../../atom/div_fieldset/form_fieldset/index1";
import Table_Fieldset1 from "../../atom/div_fieldset/table_fieldset";
import Table_Fieldset2 from "../../atom/div_fieldset/table_fieldset/index1";
import TableContact_Fieldset from "../../atom/div_fieldset/table_fieldset/index2";
import Text_Fieldset from "../../atom/div_fieldset/text_fieldset";
import Textarea_Fieldset from "../../atom/div_fieldset/text_fieldset/index1";
import Webmedia_Fieldset from "../../atom/div_fieldset/webmedia_fieldset";

/* eslint-disable jsx-a11y/alt-text */
export default function Fieldset() {
    return(
  <fieldset className="stylewidth">
    <h1>Biodata</h1>
    <Table_Fieldset1/>
    <hr />
    <h2><b>Education</b></h2>
    <ul>
    </ul>
    <Table_Fieldset2/>
    <hr />
    <Text_Fieldset/>
    <p>Lagu favorit:</p>
    <Webmedia_Fieldset/>
    <Form_Fieldset/>
    <Formtext_Fieldset/>
    <Textarea_Fieldset/>
    <TableContact_Fieldset/>
  </fieldset>
    )}