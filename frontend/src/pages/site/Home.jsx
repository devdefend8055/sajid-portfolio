import { Download, Github, Linkedin, MailPlus, MapPinned, PhoneCall } from 'lucide-react';
import { useRef } from 'react';
import RecentWorksTabs from '../../components/site/RecentWorksTabs';
// import MedalIcon from "../../assets/icons/experience-medal.png"
import { counterData, expEduData, services, skillsData } from '../../staticData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WorkTogetherForm from '../../components/site/WorkTogetherForm';
import OdometerCounterSection from '../../components/site/OdometerCounterSection ';

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className='banner-section sidespace section-space'>
        <div className="intro_text">
          <svg viewBox="0 0 1320 300" className="overflow-hidden">
            <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">HI</text>
          </svg>
        </div>
        <div className='row align-items-center'>
          <div className="col-lg-6">
            <h4>I am Zehan</h4>
            <h1 className='responsive-gradient-text'>Next-Level Web Developer.</h1>
            <div className='rotating-border-box-outer d-md-none d-block'>
              <img src="/assets/images/me.webp" className='rotating-border-box' alt="" />
            </div>
            <h5 className='banner-txt mt-md-0 mt-3 mb-4'>I break down complex user experience problems to create integritiy focussed solutions that connect billions of people</h5>
            <div className='d-flex align-items-center gap-md-4 gap-3 my-md-5 my-3 flex-md-row flex-column'>
              <a className='download-cv' href="/assets/docs/Zehan_Khan_Resume_Jan_30.pdf" target="_blank" rel="noopener noreferrer">Download CV <Download /></a>
              <div className='d-flex gap-3 flex-wrap'>
                <a className='social-icon' target='_blank' href="https://www.linkedin.com/in/khanzehan2313"><Linkedin color='#8750f7' /></a>
                <a className='social-icon' target='_blank' href="https://github.com/zehankhan10"><Github color='#8750f7' /></a>
                <a className='social-icon' target='_blank' href="mailto:khanzehan30@gmail.com"><MailPlus color='#8750f7' /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='responsive-glow-wrapper d-flex align-items-center justify-content-center'>
              <div className='rotating-border-box-outer d-md-block d-none'>
                <img src="/assets/images/me.webp" className='rotating-border-box' alt="" />
              </div>
            </div>
          </div>
          <div className='col-12 conter-column'>
            <OdometerCounterSection data={counterData} threshold={0.1} />
          </div>
        </div>
      </section>
      <section className="sidespace section-space" id="services">
        <h2 className="section-title">My Quality Services</h2>
        <div className="text-center m-auto banner-txt">
          <p>
            Turning your ideas into functional, visually stunning, and high-performing web experiences.
          </p>
        </div>

        <div className="services-widget">
          <div className="row">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-md-12"

              >
                <div
                  style={{ cursor: "pointer" }}
                  // href={`/services/${service.id}`}
                  className="service-item d-flex align-items-start justify-content-between gap-3 flex-wrap p-4 position-relative text-decoration-none"
                >
                  <div className="service-content d-flex flex-column flex-md-row gap-3 w-100">
                    <div className="service-number-title d-flex flex-column flex-md-row gap-3 w-100 w-md-40 align-items-center">
                      <strong className="service-sl-num">
                        0{service.id}
                      </strong>
                      <strong className="service-title h5 mb-0">
                        {service.title}
                      </strong>
                    </div>
                    <div className="service-desc w-100 w-md-60">
                      {service.desc}
                    </div>
                  </div>
                  <i className="flaticon-up-right-arrow service-arrow position-absolute"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='sidespace section-space recent-work-section' id='work'>
        <h2 className='section-title'>My Recent Works</h2>
        <div className='text-center banner-txt m-auto'>
          <p>A showcase of real-world projects where I transformed ideas into responsive, high-performing web experiences. From healthcare to real estate, each project reflects my focus on clean code, modern design, and user-centric functionality.</p>
        </div>
        <RecentWorksTabs />
      </section>
      <section id='about' className="my-exp-edu-section sidespace section-space">
        <div className="row g-lg-5 g-md-4 g-3">

          {/* Experience Section */}
          <div className="col-md-6">
            <h2 className="section-title text-start">My Experience</h2>
            <div className="row g-md-4 g-3">
              {expEduData.experience.map((item, index) => (
                <div className="col-md-10" key={index}>
                  <div className="my-exp-edu-card">
                    <div>
                      <h5 className="exp-date">{item.date}</h5>
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <p className="mb-0">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="col-md-6">
            <h2 className="section-title text-start">My Education</h2>
            <div className="row g-md-4 g-3">
              {expEduData.education.map((item, index) => (
                <div className="col-md-10" key={index}>
                  <div className="my-exp-edu-card">
                    <div>
                      <h5 className="exp-date">{item.date}</h5>
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <p className="mb-0">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <section className='myskills-section sidespace section-space position-relative'>
        <h2 className="section-title text-center">My Skills</h2>
        <div className='text-center m-auto banner-txt'>
          <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>

        <div className='my-skills-carousel'>
          {/* Custom Navigation Buttons */}
          <div className="custom-nav-buttons">
            <button ref={prevRef} className="custom-prev swiper-button-prev"></button>
            <button ref={nextRef} className="custom-next swiper-button-next"></button>
          </div>
          <Swiper
            className='mt-md-4 mt-3'
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={6}
            spaceBetween={20}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            allowTouchMove={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {skillsData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="my-skills-card-out">
                  <div className="my-skills-card">
                    <img className="my-skill-img" src={skill.img} alt={skill.title} />
                  </div>
                  <p className="mb-0 my-skill-ttl">{skill.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id='contact' className='work-together-section sidespace section-space'>
        <div className='row align-items-center justify-content-center justify-content-center g-lg-5 g-md-4 g-3'>
          <div className="col-xl-6 col-lg-7">
            <div className='work-together-form-out'>
              <h2 className="section-title text-center">Let’s work together!</h2>
              <p className="text-center">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
              <WorkTogetherForm />
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className='row g-lg-5 g-4 ms-lg-1 ms-md-2 ms-0 mt-lg-0 mt-3'>
              <div className='col-12'>
                <div className='d-flex align-content-center gap-3 justify-content-lg-start justify-content-center'>
                  <div className='work-together-icon'>
                    <PhoneCall />
                  </div>
                  <div>
                    <p className='mb-1'>Phone</p>
                    <h5 className='mb-0'><a className='work-together-contact-link' href="tel:+918669794117">+91 8669794117</a></h5>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='d-flex align-content-center gap-3 justify-content-lg-start justify-content-center'>
                  <div className='work-together-icon'>
                    <MailPlus />
                  </div>
                  <div>
                    <p className='mb-1'>Email</p>
                    <h5 className='mb-0'><a className='work-together-contact-link' href='mailto:khanzehan30@gmail.com'>khanzehan30@gmail.com</a></h5>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='d-flex align-content-center gap-3 justify-content-lg-start justify-content-center'>
                  <div className='work-together-icon'>
                    <MapPinned />
                  </div>
                  <div>
                    <p className='mb-1'>Address</p>
                    <h5 className='mb-0'>Pune, India</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home