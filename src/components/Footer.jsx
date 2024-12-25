
import instImg from '../images/instImg.png'
import watsappImg from '../images/watsappImg.png'


function Footer() {

    return (
      <div className="footer">
        <h2>Contact</h2>
        <div className="footerContent">
          <div>
            <p> Phone</p> 
              <h3>
                +7 (499) 350-66-04
              </h3>
          </div>
            
          <div>
            <p> Socials</p>
            <img src={instImg}/>
            <img src={watsappImg}/>
          </div>
          
          <div>
            <p> Address</p>
            <h3> Dubininskaya Ulitsa, 96, Moscow, Russia, 115093  </h3> 
          </div>
          
          <div>
            <p> Working Hours </p>
            <h3> 24 hours a day  </h3> 
          </div>
        </div>
        

          <div style={{width: '100%', padding: '20px'}}>
            <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20112093+(IThub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">
              gps tracker sport</a>
              </iframe>
          </div>

      </div>
    );
  }
  
  export default Footer;