import React, { useState } from 'react'
import Layout from '../components/layout'
import { navigate } from 'gatsby';
import { contact, dayDesired } from '../components/styles/forms.scss'





function ContactPage() {

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) =>
  //         encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&');
  // }

  // const [formValues, setFormValues] = useState({});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': event.target.getAttribute('name'),
  //       ...formValues,
  //     }),
  //   })
  //     .then(() => navigate('/thank-you/'))
  //     .catch((error) => alert(error));

  //     const formData = new FormData(event.target);
  //     const data = Object.fromEntries(formData);
  //     const wrap = document.querySelector('#contact-wrap');
  
  //     setFormValues(data);
  //     // setSubmitted(true);
  //     console.log(data); // Log the form data as an object to the console;



  //     let body = {
  //       first_name: data.first_name,
  //       last_name: data.last_name,
  //       comments: data.comments,
  //       address: data.address,
  //       Phone: data.Phone,
  //       Email: data.Email,
  //       school: data.school,
  //       lead_source: data.lead_source,
  //       child1_first_name: data.child1_first_name,
  //       child1_last_name: data.child1_last_name,
  //       child1_birthday: data.child1_birthday,
  //       child1_expected_start_date: data.child1_expected_start_date,
  //     };
  //     console.log(body)
  //     let post_url = "https://live.childcarecrm.com/import/webImportReceiver.php?hash=e2a87dc338397c5b85c4e8599c66477c";
  //     fetch(post_url, {
  //       method: "POST",
  //       mode: 'no-cors',
  //       body: JSON.stringify(body),
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.text();
  //         } else {
  //           throw new Error("Network response was not ok");
  //         }
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error("There was a problem with the fetch operation:", error);
  //       });
      
  // };

  

  return (
    <Layout pageTitle="Contact" metaDesc="Contact Columbia Children's Center">
    <div id="contact-wrap">
          <div>
        <p><strong>Columbia Children's Center</strong><br/>
        840 E. Stowell Road<br/>
        Santa Maria, CA 93454<br/>
        <a href="tel:1-805-922-5437" className="phone">805-922-KIDS (5437)</a><br/>
        Monday - Friday: 7:00 a.m. - 5:30 p.m.</p>

          <p><em>Fields marked * are required</em></p>

          <form name="contact" className="contact"  method="post"
              action="/thank-you/"
              data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
            <p>
              <label for="parentName">Parent or Gurdian Name*<input type="text" name="parentName"  placeholder="First Name Last Name" required/></label> 
            </p>

            <p>
              <label for="phone">Phone*<input type="tel" name="phone"  placeholder="Phone" required/></label>
            </p>

            <p>
              <label for="email">Email*<input type="email" name="email"  placeholder="Email" required/></label>
            </p>

            <p>
              <label for="childName">Child's Name*<input type="text" name="childName"  placeholder="First Name Last Name" required/></label>
            </p>

            <p>
              <label for="childBirthday">Child's Birthday*<input type="date" name="childBirthday"  placeholder="Child's Birthday" required/></label>
            </p>

            <p>
              <label for="pottyTrained">Potty Trained?
                  <select name="pottyTrained[]">
                    <option disabled selected="true">Select</option>
                    <option value="yes" name="pottyTrained">Yes</option>
                    <option value="no" name="pottyTrained">No</option>
                  </select>
                </label>
            </p>

            <p>
              <span style={{ display: `block`}}>Days Desired</span>

              <div className="daysDesired">
                
                <label for="dayDesired1">Monday
                  <input type="checkbox" id="dayDesired1" name="dayDesired1" value="Monday" />
                </label>
                
                <label for="dayDesired2">Tuesday
                  <input type="checkbox" id="dayDesired2" name="dayDesired2" value="Tuesday" />
                </label>
                
                <label for="dayDesired3">Wednesday
                  <input type="checkbox" id="dayDesired3" name="dayDesired3" value="Wednesday" />
                </label>
                
                <label for="dayDesired4">Thursday
                  <input type="checkbox" id="dayDesired4" name="dayDesired4" value="Thursday" />
                </label>
                
                <label for="dayDesired5">Friday
                  <input type="checkbox" id="dayDesired5" name="dayDesired5" value="Friday" />
                </label>
              </div>

            </p>

            <p>
              <label for="desiredStartHour">Desired Start Hour
                <select name="desiredStartHour[]">
                  <option disabled selected="true">Select</option>
                  <option value="7:00" name="desiredStartHour">7:00</option>
                  <option value="7:30" name="desiredStartHour">7:30</option>
                  <option value="8:00" name="desiredStartHour">8:00</option>
                  <option value="8:30" name="desiredStartHour">8:30</option>
                  <option value="9:00" name="desiredStartHour">9:00</option>
                  <option value="9:30" name="desiredStartHour">9:30</option>
                  <option value="10:00" name="desiredStartHour">10:00</option>
                  <option value="10:30" name="desiredStartHour">10:30</option>
                  <option value="11:00" name="desiredStartHour">11:00</option>
                  <option value="11:30" name="desiredStartHour">11:30</option>
                  <option value="12:00" name="desiredStartHour">12:00</option>
                  <option value="12:30" name="desiredStartHour">12:30</option>
                  <option value="1:00" name="desiredStartHour">1:00</option>
                  <option value="1:30" name="desiredStartHour">1:30</option>
                  <option value="2:00" name="desiredStartHour">2:00</option>
                  <option value="2:30" name="desiredStartHour">2:30</option>
                  <option value="3:00" name="desiredStartHour">3:00</option>
                  <option value="3:30" name="desiredStartHour">3:30</option>
                  <option value="4:00" name="desiredStartHour">4:00</option>
                  </select>
                </label>
            </p>

            <p>
              <label for="desiredEndHour">Desired End Hour
              <select name="desiredEndHour[]">
                <option disabled selected="true">Select</option>
                <option value="8:00" name="desiredEndHour">8:00</option>
                <option value="8:30" name="desiredEndHour">8:30</option>
                <option value="9:00" name="desiredEndHour">9:00</option>
                <option value="9:30" name="desiredEndHour">9:30</option>
                <option value="10:00" name="desiredEndHour">10:00</option>
                <option value="10:30" name="desiredEndHour">10:30</option>
                <option value="11:00" name="desiredEndHour">11:00</option>
                <option value="11:30" name="desiredEndHour">11:30</option>
                <option value="12:00" name="desiredEndHour">12:00</option>
                <option value="12:30" name="desiredEndHour">12:30</option>
                <option value="1:00" name="desiredEndHour">1:00</option>
                <option value="1:30" name="desiredEndHour">1:30</option>
                <option value="2:00" name="desiredEndHour">2:00</option>
                <option value="2:30" name="desiredEndHour">2:30</option>
                <option value="3:00" name="desiredEndHour">3:00</option>
                <option value="3:30" name="desiredEndHour">3:30</option>
                <option value="4:00" name="desiredEndHour">4:00</option>
                <option value="4:30" name="desiredEndHour">4:30</option>
                <option value="5:00" name="desiredEndHour">5:00</option>
                </select>
              </label>
            </p>

            <p>
              <label for="desiredStartDate">Desired Start Date 
                <input type="date" name="desiredStartDate"  placeholder="Desired Start Date" required/>
              </label>
            </p>
          
            
            <p className="flexEnd">
              <button type="submit">Send</button>
            </p>
        </form>

          </div>



        
      </div>
    </Layout>
  )
}






export default ContactPage