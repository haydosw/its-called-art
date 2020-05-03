import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';


import waffle from './Assets/waffle.gif'; // Tell webpack this JS file uses this image
import waffleKing from './Assets/waffleking.jpg'; // Tell webpack this JS file uses this image
import vandam from './Assets/vandam.gif'; // Tell webpack this JS file uses this image
import statham from './Assets/statham.gif'; // Tell webpack this JS file uses this image
import thelama from './Assets/thelama.png'; // Tell webpack this JS file uses this image
import car from './Assets/car.jpg'; // Tell webpack this JS file uses this image
import copilot from './Assets/copilot.jpg'; // Tell webpack this JS file uses this image
import donny from './Assets/donny.jpg'; // Tell webpack this JS file uses this image
import car2 from './Assets/car2.jpg'; // Tell webpack this JS file uses this image
import car3 from './Assets/car3.jpg'; // Tell webpack this JS file uses this image
import bovril from './Assets/bovril.jpg'
import greenwall from './Assets/greenwall.jpg'
import contact from './Assets/contact.gif'
import ranger from './Assets/ranger.gif'

function App() {
  return (
    <Container className="App">

      <h1>
        <a className="love-label">✫✫✫✫✫✫</a> <a className="Name">Hayden Wiltshire</a> <a className="love-label">✫✫✫✫✫✫</a>
      </h1>
      <h2>
        <a className="Title">software engineer</a>
        <br />
      </h2>
      <h2 className="Sub"> About Me </h2>

      <p className="About">
        I have been developing software for over 10 years.  During that time I have worked heavily with Visual Basic, Excel and Notepad. I was also the lead designer for the number 1 media player - Winamp.
      </p>
      <img className="profile-img" src={thelama} />
      <br />
      <br />
      <br />

      {/* <hr />
      <br /> */}


      <p className="About">
        I am nationally ranked power eating champion. In 96' I won the Alabama
        "King of the Waffles" power eating event for the 3rd time.
         </p>


      <img className="profile-img" src={waffleKing} />
      <p className="About">
        (This is me: aka King Waffle)
          </p>


      <p className="About">
        It was shortly after this win I had to give competitive eating up and focus on the family business.
        Our family has been one of the primary producers of the breakfast time favorites Bovril for over 30 years.
         </p>

      <img className="profile-img" src={bovril} />
      <p className="About">
        <i>("The tastiest beef spread money can buy!")</i>

      </p>

      {/* <hr />
      <br /> */}

      <p className="About">
        As a troubled youth in baltmore I had one to many run-ins with the law.
        I was senteced to community service at Maryland School of the Arts. This is where I met Nora.
        We fell in love and encouraged each other to follow our passion for dance
        and fulfil our dreams.  My idols Van Damme, Statham and the Power Rangers also insipired me from a younge age to pursue dance.
        Unfortunately my dancing career ended when the rhythm died (99').
        </p>


      <img src={statham} className="profile-img" />
      <br />
      <br />
      <br />
      <img src={vandam} className="profile-img" />
      <br />
      <br />
      <br />
      <img src={ranger} className="profile-img" style={{height: '340px'}} />
      <br />
      <br />
      <br />

      {/* <hr />
      <br /> */}

      <p className="About">
        My brother Kip begun to follow in my footsteps. He started boosting luxery cars.
</p>
      <img src={car2} className="profile-img" />
      <br />
      <br />
      <br />
      <p className="About">
        After not being able to deliver on a heist I was called in to save his life. Once the most successful car thief in California, I had to reassemble the old crew to fulfil the almost
        impossible mission. My task was further hampered by a rival band of thieves and, of course, the local police.
      </p>

      <img src={car} className="profile-img" />
      <img src={copilot} className="profile-img" />
      <img src={donny} className="profile-img" />
      <p className="About">
        (The crew: Sway, Otto and Donny)
      </p>
{/* 
      <hr />    
      <br />
       */}
      <p className="About">
        Following on from saving Kips life I needed to get my own life back on track. It was then I was contacted by Mr Shear. As it turns
        out I had become notorious for infecting the FBI's Carnivore program with a computer virus. Mr Shear offerd me $10 million to program
        a multi-headed worm, a "hydra", to siphon $9.5 billion from government slush funds. I would need to travel to L.A to source the required hardware.
        I packed up the car and set off.
      </p>
      <img src={car3} className="profile-img" />
      <br />
      <br />
      <br />

      {/* <hr />
      <br />
       */}
      <p className="About">
        While makeing my way to L.A I was contacted by my old friend Greenwall.
      </p>
      <img src={greenwall} className="profile-img" />
      <p className="About">
        (Greenwall 92')
      </p>
      
      <p className="About">
        He needed me to investigate the disappearance of a rare white bat. The sacred animal of the native Wachati tribe,
        which disappeared shortly after being offered as dowry of the Wachati Princess, who was set to wed the Wachootoo
        Prince in a marriage of state.
      </p>


      {/* <hr />
      <br /> */}

      <h2 className="Sub"> Hobbies </h2>

      <p className="About">
        Sleeping 14 hours a day <br />
        Most nights I enjoy barking into darkness for no reason. <br />
        Trying to fight everyone <br />
      </p>

      <h2 className="Sub"> Skills </h2>

      <p className="About">
        <a className="love-label">✫</a> Hiding bones in backyard  <a className="love-label">✫</a><br />
        <a className="love-label">✫</a> Chewing on couch leg <a className="love-label">✫</a> <br />
        <a className="love-label">✫</a> Chasing Cars <a className="love-label">✫</a><br />
        <a className="love-label">✫</a> Not sitting when told <a className="love-label">✫</a> <br />
        <a className="love-label">✫</a> Looking you in eye then doing whatever I wanted anyway <a className="love-label">✫</a> <br />
      </p>

      <h2 className="Sub"> Testimonials </h2>
      <p className="About Sub2">
        <i> "Very good boy" - Mum  </i>
      </p>
      <p className="About Sub2">
        <i> "Loudest bark in neighbourhood" - Guy Next Door  </i>
      </p>
      <p className="About Sub2">
        <i> "Bark" - Other dog at park  </i>
      </p>

      <h2 className="Sub"> Contact </h2>
      <p className="About Sub2 glow">
        electonic mail - wiltshih@gmail.com         
      </p>
      <img src={contact} className="profile-img" />
      <br/>
      

      <br />
      <br />

      <p className="About">
        <i> 1997  </i>
      </p>

    </Container>
  );
}

export default App;
