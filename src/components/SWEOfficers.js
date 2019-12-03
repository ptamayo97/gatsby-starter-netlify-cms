import React from "react";

const SWEOfficers = props => {
  return (
    <section class="section team">
      <h1 class="main__title team__title">SWE Officers</h1>

      <div class="team-container">
        {props.sweOfficers.map(officer => (
          <article class="team__module">
            <center>
              <img src={officer.image} alt={officer.name} />
            </center>
            <a href={`mailto:${officer.email}`}>
              <h3>{officer.name}</h3>
            </a>
            <p>{officer.position}</p>
          </article>
        ))}

        {/* <article class="team__module">
            <center>
              <img src="https://i.imgur.com/DjlBbwM.jpg" alt="" />
            </center>
            <a href="mailto:mailto:btorquat@ucsd.edu">
              <h3>Brea Torquato</h3>
            </a>
            <p>President</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/BZZyXFo.jpg" alt="" />
            </center>
            <a href="mailto:mailto:pks007@ucsd.edu ">
              <h3>Payal Singh</h3>
            </a>
            <p>Vice President External</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/Y6rOo3m.jpg" alt="" />
            </center>
            <a href="mailto:mailto:mcgalvez@ucsd.edu ">
              <h3>Maria Galvez</h3>
            </a>
            <p>Vice President Internal</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/T5fttM0.jpg" alt="" />
            </center>
            <a href="mailto:mailto:a1carden@ucsd.edu">
              <h3>Anne Cardenas</h3>
            </a>
            <p>Treasurer</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/gYGheeA.jpg" alt="" />
            </center>
            <a href="mailto:mailto:mandrade@ucsd.edu">
              <h3>Maria Andrade</h3>
            </a>
            <p>Secretary</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/GaHPYPQ.jpg" alt="" />
            </center>
            <a href="mailto:mailto:atg004@ucsd.edu">
              <h3>Agnes Garcia</h3>
            </a>
            <p>Envision Outreach Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/uDqIHtx.jpg" alt="" />
            </center>
            <a href="mailto:mailto:mac180@ucsd.edu">
              <h3>Magali Chavez</h3>
            </a>
            <p>ABLE Outreach Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/7joiTCv.jpg" alt="" />
            </center>
            <a href="mailto:mailto: nbangari@ucsd.edu">
              <h3>Nidhi Bangari</h3>
            </a>
            <p>SWENext Outreach Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/0adO7RP.jpg" alt="" />
            </center>
            <a href="mailto:mailto:soh024@ucsd.edu">
              <h3>Sophie Huang</h3>
            </a>
            <p>Academic Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/Kc9mKsA.jpg" alt="" />
            </center>
            <a href="mailto:mailto:marman@ucsd.edu">
              <h3>Madina Arman</h3>
            </a>
            <p>Project Team Coordinator</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/y0hJ4sH.jpg" alt="" />
            </center>
            <a href="mailto:mailto:eshohet@ucsd.edu">
              <h3>Elianor Shohet</h3>
            </a>
            <p>Publicity Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/XcMFcGL.jpg" alt="" />
            </center>
            <a href="mailto:mailto:N4lopez@ucsd.edu">
              <h3>Natalie Lopez</h3>
            </a>
            <p>Social Chair</p>
          </article> */}
      </div>
    </section>
  );
};

export default SWEOfficers;
