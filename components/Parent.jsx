import About from './About'
import Experiences from './Experiences'
import Skills from './Skills'
import Education from './Education'
import Certificates from './Certificates'
import Courses from './Courses'
import Projects from './Projects'
import Volunteering from './Volunteering'


export default function Parent() {
  return (
    <div className='container m-auto  p-[var(--main-padding)] flex flex-col gap-2'>
      <About/>
      <Skills/>
     <Projects/>
      <Experiences/>
      <Education/>
      <Certificates/>
      <Courses/>
      <Volunteering/>
    </div>
  )
}
