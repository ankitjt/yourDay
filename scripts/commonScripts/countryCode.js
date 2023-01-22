
( () =>
{
  let countries =
    `
                    <option data-countryCode="IN" value="+91" class="block w-full text-xs md:font-semibold md:text-base"
                      selected>
                      <span class="countryCodeNumber">+91</span>
                    </option>
                    <optgroup label="Other countries">
                      <option data-countryCode="GB" class="block w-full text-xs md:font-semibold md:text-base"
                        value="44">Norway
                      </option>
                      <option data-countryCode="DZ"
                        class="block w-full text-xs dropOption md:font-semibold md:text-base" value="213">
                        <div class="countryNameAlgeria">Algeria </div>
                        <div class="countryCodeNumber">(+213)</div>
                      </option>
                      <option data-countryCode="AD" class="block w-full text-xs md:font-semibold md:text-base"
                        value="376">Andorra (+376)</option>
                      <option data-countryCode="AO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="244">Angola (+244)</option>
                      <option data-countryCode="AI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1264">Anguilla (+1264)</option>
                      <option data-countryCode="AG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1268">Antigua &amp; Barbuda (+1268)</option>
                      <option data-countryCode="AR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="54">Argentina (+54)</option>
                      <option data-countryCode="AM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="374">Armenia (+374)</option>
                      <option data-countryCode="AW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="297">Aruba (+297)</option>
                      <option data-countryCode="AU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="61">Australia (+61)</option>
                      <option data-countryCode="AT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="43">Austria (+43)</option>
                      <option data-countryCode="AZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="994">Azerbaijan (+994)</option>
                      <option data-countryCode="BS" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1242">Bahamas (+1242)</option>
                      <option data-countryCode="BH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="973">Bahrain (+973)</option>
                      <option data-countryCode="BD" class="block w-full text-xs md:font-semibold md:text-base"
                        value="880">Bangladesh (+880)</option>
                      <option data-countryCode="BB" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1246">Barbados (+1246)</option>
                      <option data-countryCode="BY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="375">Belarus (+375)</option>
                      <option data-countryCode="BE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="32">Belgium (+32)</option>
                      <option data-countryCode="BZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="501">Belize (+501)</option>
                      <option data-countryCode="BJ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="229">Benin (+229)</option>
                      <option data-countryCode="BM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1441">Bermuda (+1441)</option>
                      <option data-countryCode="BT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="975">Bhutan (+975)</option>
                      <option data-countryCode="BO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="591">Bolivia (+591)</option>
                      <option data-countryCode="BA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="387">Bosnia Herzegovina (+387)</option>
                      <option data-countryCode="BW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="267">Botswana (+267)</option>
                      <option data-countryCode="BR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="55">Brazil (+55)</option>
                      <option data-countryCode="BN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="673">Brunei (+673)</option>
                      <option data-countryCode="BG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="359">Bulgaria (+359)</option>
                      <option data-countryCode="BF" class="block w-full text-xs md:font-semibold md:text-base"
                        value="226">Burkina Faso (+226)</option>
                      <option data-countryCode="BI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="257">Burundi (+257)</option>
                      <option data-countryCode="KH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="855">Cambodia (+855)</option>
                      <option data-countryCode="CM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="237">Cameroon (+237)</option>
                      <option data-countryCode="CA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1">Canada (+1)</option>
                      <option data-countryCode="CV" class="block w-full text-xs md:font-semibold md:text-base"
                        value="238">Cape Verde Islands (+238)</option>
                      <option data-countryCode="KY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1345">Cayman Islands (+1345)</option>
                      <option data-countryCode="CF" class="block w-full text-xs md:font-semibold md:text-base"
                        value="236">Central African Republic (+236)</option>
                      <option data-countryCode="CL" class="block w-full text-xs md:font-semibold md:text-base"
                        value="56">Chile (+56)</option>
                      <option data-countryCode="CN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="86">China (+86)</option>
                      <option data-countryCode="CO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="57">Colombia (+57)</option>
                      <option data-countryCode="KM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="269">Comoros (+269)</option>
                      <option data-countryCode="CG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="242">Congo (+242)</option>
                      <option data-countryCode="CK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="682">Cook Islands (+682)</option>
                      <option data-countryCode="CR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="506">Costa Rica (+506)</option>
                      <option data-countryCode="HR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="385">Croatia (+385)</option>
                      <option data-countryCode="CU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="53">Cuba (+53)</option>
                      <option data-countryCode="CY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="90392">Cyprus North (+90392)</option>
                      <option data-countryCode="CY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="357">Cyprus South (+357)</option>
                      <option data-countryCode="CZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="42">Czech Republic (+42)</option>
                      <option data-countryCode="DK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="45">Denmark (+45)</option>
                      <option data-countryCode="DJ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="253">Djibouti (+253)</option>
                      <option data-countryCode="DM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1809">Dominica (+1809)</option>
                      <option data-countryCode="DO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1809">Dominican Republic (+1809)</option>
                      <option data-countryCode="EC" class="block w-full text-xs md:font-semibold md:text-base"
                        value="593">Ecuador (+593)</option>
                      <option data-countryCode="EG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="20">Egypt (+20)</option>
                      <option data-countryCode="SV" class="block w-full text-xs md:font-semibold md:text-base"
                        value="503">El Salvador (+503)</option>
                      <option data-countryCode="GQ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="240">Equatorial Guinea (+240)</option>
                      <option data-countryCode="ER" class="block w-full text-xs md:font-semibold md:text-base"
                        value="291">Eritrea (+291)</option>
                      <option data-countryCode="EE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="372">Estonia (+372)</option>
                      <option data-countryCode="ET" class="block w-full text-xs md:font-semibold md:text-base"
                        value="251">Ethiopia (+251)</option>
                      <option data-countryCode="FK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="500">Falkland Islands (+500)</option>
                      <option data-countryCode="FO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="298">Faroe Islands (+298)</option>
                      <option data-countryCode="FJ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="679">Fiji (+679)</option>
                      <option data-countryCode="FI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="358">Finland (+358)</option>
                      <option data-countryCode="FR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="33">France (+33)</option>
                      <option data-countryCode="GF" class="block w-full text-xs md:font-semibold md:text-base"
                        value="594">French Guiana (+594)</option>
                      <option data-countryCode="PF" class="block w-full text-xs md:font-semibold md:text-base"
                        value="689">French Polynesia (+689)</option>
                      <option data-countryCode="GA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="241">Gabon (+241)</option>
                      <option data-countryCode="GM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="220">Gambia (+220)</option>
                      <option data-countryCode="GE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="7880">Georgia (+7880)</option>
                      <option data-countryCode="DE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="49">Germany (+49)</option>
                      <option data-countryCode="GH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="233">Ghana (+233)</option>
                      <option data-countryCode="GI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="350">Gibraltar (+350)</option>
                      <option data-countryCode="GR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="30">Greece (+30)</option>
                      <option data-countryCode="GL" class="block w-full text-xs md:font-semibold md:text-base"
                        value="299">Greenland (+299)</option>
                      <option data-countryCode="GD" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1473">Grenada (+1473)</option>
                      <option data-countryCode="GP" class="block w-full text-xs md:font-semibold md:text-base"
                        value="590">Guadeloupe (+590)</option>
                      <option data-countryCode="GU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="671">Guam (+671)</option>
                      <option data-countryCode="GT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="502">Guatemala (+502)</option>
                      <option data-countryCode="GN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="224">Guinea (+224)</option>
                      <option data-countryCode="GW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="245">Guinea - Bissau (+245)</option>
                      <option data-countryCode="GY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="592">Guyana (+592)</option>
                      <option data-countryCode="HT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="509">Haiti (+509)</option>
                      <option data-countryCode="HN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="504">Honduras (+504)</option>
                      <option data-countryCode="HK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="852">Hong Kong (+852)</option>
                      <option data-countryCode="HU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="36">Hungary (+36)</option>
                      <option data-countryCode="IS" class="block w-full text-xs md:font-semibold md:text-base"
                        value="354">Iceland (+354)</option>
                      <option data-countryCode="IN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="91">India (+91)</option>
                      <option data-countryCode="ID" class="block w-full text-xs md:font-semibold md:text-base"
                        value="62">Indonesia (+62)</option>
                      <option data-countryCode="IR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="98">Iran (+98)</option>
                      <option data-countryCode="IQ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="964">Iraq (+964)</option>
                      <option data-countryCode="IE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="353">Ireland (+353)</option>
                      <option data-countryCode="IL" class="block w-full text-xs md:font-semibold md:text-base"
                        value="972">Israel (+972)</option>
                      <option data-countryCode="IT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="39">Italy (+39)</option>
                      <option data-countryCode="JM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1876">Jamaica (+1876)</option>
                      <option data-countryCode="JP" class="block w-full text-xs md:font-semibold md:text-base"
                        value="81">Japan (+81)</option>
                      <option data-countryCode="JO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="962">Jordan (+962)</option>
                      <option data-countryCode="KZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="7">Kazakhstan (+7)</option>
                      <option data-countryCode="KE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="254">Kenya (+254)</option>
                      <option data-countryCode="KI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="686">Kiribati (+686)</option>
                      <option data-countryCode="KP" class="block w-full text-xs md:font-semibold md:text-base"
                        value="850">Korea North (+850)</option>
                      <option data-countryCode="KR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="82">Korea South (+82)</option>
                      <option data-countryCode="KW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="965">Kuwait (+965)</option>
                      <option data-countryCode="KG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="996">Kyrgyzstan (+996)</option>
                      <option data-countryCode="LA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="856">Laos (+856)</option>
                      <option data-countryCode="LV" class="block w-full text-xs md:font-semibold md:text-base"
                        value="371">Latvia (+371)</option>
                      <option data-countryCode="LB" class="block w-full text-xs md:font-semibold md:text-base"
                        value="961">Lebanon (+961)</option>
                      <option data-countryCode="LS" class="block w-full text-xs md:font-semibold md:text-base"
                        value="266">Lesotho (+266)</option>
                      <option data-countryCode="LR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="231">Liberia (+231)</option>
                      <option data-countryCode="LY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="218">Libya (+218)</option>
                      <option data-countryCode="LI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="417">Liechtenstein (+417)</option>
                      <option data-countryCode="LT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="370">Lithuania (+370)</option>
                      <option data-countryCode="LU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="352">Luxembourg (+352)</option>
                      <option data-countryCode="MO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="853">Macao (+853)</option>
                      <option data-countryCode="MK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="389">Macedonia (+389)</option>
                      <option data-countryCode="MG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="261">Madagascar (+261)</option>
                      <option data-countryCode="MW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="265">Malawi (+265)</option>
                      <option data-countryCode="MY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="60">Malaysia (+60)</option>
                      <option data-countryCode="MV" class="block w-full text-xs md:font-semibold md:text-base"
                        value="960">Maldives (+960)</option>
                      <option data-countryCode="ML" class="block w-full text-xs md:font-semibold md:text-base"
                        value="223">Mali (+223)</option>
                      <option data-countryCode="MT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="356">Malta (+356)</option>
                      <option data-countryCode="MH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="692">Marshall Islands (+692)</option>
                      <option data-countryCode="MQ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="596">Martinique (+596)</option>
                      <option data-countryCode="MR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="222">Mauritania (+222)</option>
                      <option data-countryCode="YT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="269">Mayotte (+269)</option>
                      <option data-countryCode="MX" class="block w-full text-xs md:font-semibold md:text-base"
                        value="52">Mexico (+52)</option>
                      <option data-countryCode="FM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="691">Micronesia (+691)</option>
                      <option data-countryCode="MD" class="block w-full text-xs md:font-semibold md:text-base"
                        value="373">Moldova (+373)</option>
                      <option data-countryCode="MC" class="block w-full text-xs md:font-semibold md:text-base"
                        value="377">Monaco (+377)</option>
                      <option data-countryCode="MN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="976">Mongolia (+976)</option>
                      <option data-countryCode="MS" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1664">Montserrat (+1664)</option>
                      <option data-countryCode="MA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="212">Morocco (+212)</option>
                      <option data-countryCode="MZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="258">Mozambique (+258)</option>
                      <option data-countryCode="MN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="95">Myanmar (+95)</option>
                      <option data-countryCode="NA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="264">Namibia (+264)</option>
                      <option data-countryCode="NR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="674">Nauru (+674)</option>
                      <option data-countryCode="NP" class="block w-full text-xs md:font-semibold md:text-base"
                        value="977">Nepal (+977)</option>
                      <option data-countryCode="NL" class="block w-full text-xs md:font-semibold md:text-base"
                        value="31">Netherlands (+31)</option>
                      <option data-countryCode="NC" class="block w-full text-xs md:font-semibold md:text-base"
                        value="687">New Caledonia (+687)</option>
                      <option data-countryCode="NZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="64">New Zealand (+64)</option>
                      <option data-countryCode="NI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="505">Nicaragua (+505)</option>
                      <option data-countryCode="NE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="227">Niger (+227)</option>
                      <option data-countryCode="NG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="234">Nigeria (+234)</option>
                      <option data-countryCode="NU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="683">Niue (+683)</option>
                      <option data-countryCode="NF" class="block w-full text-xs md:font-semibold md:text-base"
                        value="672">Norfolk Islands (+672)</option>
                      <option data-countryCode="NP" class="block w-full text-xs md:font-semibold md:text-base"
                        value="670">Northern Marianas (+670)</option>
                      <option data-countryCode="NO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="47">Norway (+47)</option>
                      <option data-countryCode="OM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="968">Oman (+968)</option>
                      <option data-countryCode="PW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="680">Palau (+680)</option>
                      <option data-countryCode="PA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="507">Panama (+507)</option>
                      <option data-countryCode="PG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="675">Papua New Guinea (+675)</option>
                      <option data-countryCode="PY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="595">Paraguay (+595)</option>
                      <option data-countryCode="PE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="51">Peru (+51)</option>
                      <option data-countryCode="PH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="63">Philippines (+63)</option>
                      <option data-countryCode="PL" class="block w-full text-xs md:font-semibold md:text-base"
                        value="48">Poland (+48)</option>
                      <option data-countryCode="PT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="351">Portugal (+351)</option>
                      <option data-countryCode="PR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1787">Puerto Rico (+1787)</option>
                      <option data-countryCode="QA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="974">Qatar (+974)</option>
                      <option data-countryCode="RE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="262">Reunion (+262)</option>
                      <option data-countryCode="RO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="40">Romania (+40)</option>
                      <option data-countryCode="RU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="7">Russia (+7)</option>
                      <option data-countryCode="RW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="250">Rwanda (+250)</option>
                      <option data-countryCode="SM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="378">San Marino (+378)</option>
                      <option data-countryCode="ST" class="block w-full text-xs md:font-semibold md:text-base"
                        value="239">Sao Tome &amp; Principe (+239)</option>
                      <option data-countryCode="SA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="966">Saudi Arabia (+966)</option>
                      <option data-countryCode="SN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="221">Senegal (+221)</option>
                      <option data-countryCode="CS" class="block w-full text-xs md:font-semibold md:text-base"
                        value="381">Serbia (+381)</option>
                      <option data-countryCode="SC" class="block w-full text-xs md:font-semibold md:text-base"
                        value="248">Seychelles (+248)</option>
                      <option data-countryCode="SL" class="block w-full text-xs md:font-semibold md:text-base"
                        value="232">Sierra Leone (+232)</option>
                      <option data-countryCode="SG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="65">Singapore (+65)</option>
                      <option data-countryCode="SK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="421">Slovak Republic (+421)</option>
                      <option data-countryCode="SI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="386">Slovenia (+386)</option>
                      <option data-countryCode="SB" class="block w-full text-xs md:font-semibold md:text-base"
                        value="677">Solomon Islands (+677)</option>
                      <option data-countryCode="SO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="252">Somalia (+252)</option>
                      <option data-countryCode="ZA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="27">South Africa (+27)</option>
                      <option data-countryCode="ES" class="block w-full text-xs md:font-semibold md:text-base"
                        value="34">Spain (+34)</option>
                      <option data-countryCode="LK" class="block w-full text-xs md:font-semibold md:text-base"
                        value="94">Sri Lanka (+94)</option>
                      <option data-countryCode="SH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="290">St. Helena (+290)</option>
                      <option data-countryCode="KN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1869">St. Kitts (+1869)</option>
                      <option data-countryCode="SC" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1758">St. Lucia (+1758)</option>
                      <option data-countryCode="SD" class="block w-full text-xs md:font-semibold md:text-base"
                        value="249">Sudan (+249)</option>
                      <option data-countryCode="SR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="597">Suriname (+597)</option>
                      <option data-countryCode="SZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="268">Swaziland (+268)</option>
                      <option data-countryCode="SE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="46">Sweden (+46)</option>
                      <option data-countryCode="CH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="41">Switzerland (+41)</option>
                      <option data-countryCode="SI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="963">Syria (+963)</option>
                      <option data-countryCode="TW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="886">Taiwan (+886)</option>
                      <option data-countryCode="TJ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="7">Tajikstan (+7)</option>
                      <option data-countryCode="TH" class="block w-full text-xs md:font-semibold md:text-base"
                        value="66">Thailand (+66)</option>
                      <option data-countryCode="TG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="228">Togo (+228)</option>
                      <option data-countryCode="TO" class="block w-full text-xs md:font-semibold md:text-base"
                        value="676">Tonga (+676)</option>
                      <option data-countryCode="TT" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1868">Trinidad &amp; Tobago (+1868)</option>
                      <option data-countryCode="TN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="216">Tunisia (+216)</option>
                      <option data-countryCode="TR" class="block w-full text-xs md:font-semibold md:text-base"
                        value="90">Turkey (+90)</option>
                      <option data-countryCode="TM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="7">Turkmenistan (+7)</option>
                      <option data-countryCode="TM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="993">Turkmenistan (+993)</option>
                      <option data-countryCode="TC" class="block w-full text-xs md:font-semibold md:text-base"
                        value="1649">Turks &amp; Caicos Islands (+1649)</option>
                      <option data-countryCode="TV" class="block w-full text-xs md:font-semibold md:text-base"
                        value="688">Tuvalu (+688)</option>
                      <option data-countryCode="UG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="256">Uganda (+256)</option>
                      <option data-countryCode="UA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="380">Ukraine (+380)</option>
                      <option data-countryCode="AE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="971">United Arab Emirates (+971)</option>
                      <option data-countryCode="UY" class="block w-full text-xs md:font-semibold md:text-base"
                        value="598">Uruguay (+598)</option>
                      <option data-countryCode="UZ" class="block w-full text-xs md:font-semibold md:text-base"
                        value="7">Uzbekistan (+7)</option>
                      <option data-countryCode="VU" class="block w-full text-xs md:font-semibold md:text-base"
                        value="678">Vanuatu (+678)</option>
                      <option data-countryCode="VA" class="block w-full text-xs md:font-semibold md:text-base"
                        value="379">Vatican City (+379)</option>
                      <option data-countryCode="VE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="58">Venezuela (+58)</option>
                      <option data-countryCode="VN" class="block w-full text-xs md:font-semibold md:text-base"
                        value="84">Vietnam (+84)</option>
                      <option data-countryCode="VG" class="block w-full text-xs md:font-semibold md:text-base"
                        value="84">Virgin Islands - British (+1284)</option>
                      <option data-countryCode="VI" class="block w-full text-xs md:font-semibold md:text-base"
                        value="84">Virgin Islands - US (+1340)</option>
                      <option data-countryCode="WF" class="block w-full text-xs md:font-semibold md:text-base"
                        value="681">Wallis &amp; Futuna (+681)</option>
                      <option data-countryCode="YE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="969">Yemen (North)(+969)</option>
                      <option data-countryCode="YE" class="block w-full text-xs md:font-semibold md:text-base"
                        value="967">Yemen (South)(+967)</option>
                      <option data-countryCode="ZM" class="block w-full text-xs md:font-semibold md:text-base"
                        value="260">Zambia (+260)</option>
                      <option data-countryCode="ZW" class="block w-full text-xs md:font-semibold md:text-base"
                        value="263">Zimbabwe (+263)</option>
                    </optgroup>
                  
    `
  for ( let eachTag of countryCode )
  {
    eachTag.innerHTML += countries
  }
} )()