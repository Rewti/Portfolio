import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {/* 1st li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conducting in-depth research to gain insights into user behavior, needs, and preferences.  </p>
            
            </li>

            {/* 2nd li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p> Creating low-fidelity wireframes and interactive prototypes to visualize the layout, structure, and navigation of ui</p>

            </li>
            {/* 3rd li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing visually appealing and intuitive user interfaces that align with the brand identity and target audience</p>

            </li>

            {/* 4th li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conducting usability tests on prototypes or live products to gather feedback and identify areas of improvement. </p>

            </li>
            

          </ul>
        </article>

        {/* End of UI/UX content */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {/* 1st li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building websites from scratch using programming languages such as HTML, CSS, and JavaScript.</p>

            </li>

            {/* 2nd li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing the client-side of a website, focusing on the user interface and user experience. </p>

            </li>
            {/* 3rd li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating the server-side of a website, which handles data storage, retrieval, and processing</p>

            </li>

            {/* 4th li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Combining frontend and backend development skills to build complete web applications.</p>

            </li>
            {/* 5th li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design, maintainance and updates </p>

            </li>
            

          </ul>
        </article>

        {/* End of web development */}

        <article className="service">
          <div className="service__head">
            <h3>Android Development</h3>
          </div>
          <ul className="service__list">
            {/* 1st li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p> Gathering data from various sources, including databases, spreadsheets, web scraping, APIs, and IoT devices </p>

            </li>

            {/* 2nd li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cleaning and preparing raw data for analysis by handling missing values, outlier detection, data normalization, and resolving inconsistencies. </p>

            </li>
            {/* 3rd li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Exploring and visualizing data using statistical techniques, data visualization tools, and dashboards. </p>

            </li>

            {/* 4th li */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Investigating the reasons behind specific events or outcomes by performing root cause analysis and identifying contributing factors.</p>

            </li>
            

          </ul>
        </article>
      {/* End of content creation */}
      </div>
    </section>
  )
}

export default services