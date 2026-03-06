import About from './About'
import Experiences from './Experiences'
import Skills from './Skills'
import Education from './Education'
import Certificates from './Certificates'
import Courses from './Courses'
import MemberShips from './MemberShips'
import Licenses from './Licenses'



export default function Parent() {
  return (
    <div className='container m-auto  p-[var(--main-padding)] flex flex-col gap-2'>
      <About/>
      <Skills/>
      <Experiences/>
      <Education/>
      <Certificates/>
      <MemberShips/>
      <Licenses/>
      {/* <Courses/> */}
      
    </div>
  )
}
