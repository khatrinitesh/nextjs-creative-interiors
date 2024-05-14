import ExperienceData from "./ExperienceData"


const Experience = () => {
  return (
    <section className="py-[80px] dark:bg-primaryDarkGradient bg-secondaryDarkGradient text-center" id="experience">
        <h2 className="headTitle dark:text-white text-primaryDark font-monsterratB text-fs36 mb-[40px]">INDIA’S MOST EXPERIENCED, <br />PROFESSIONAL INTERIOR DESIGNERS</h2>
        <ExperienceData/>
        <h2 className="headTitle dark:text-white text-primaryDark font-monsterratM text-fs36 mb-[40px]">We are the best agency<br />to improve your residency and work place.</h2>
    </section>
  )
}

export default Experience