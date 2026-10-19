import * as React from 'react'
import { Link } from 'gatsby'
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import {
  programsSection,
  programsIntro,
  programGrid,
  programCard,
  programIcon,
  toddlerIcon,
  preschoolIcon,
  readinessIcon,
  programAge,
  programDescription,
  programButton,
} from './styles/homepagePrograms.module.scss'

const programs = [
  {
    title: 'Young Toddler',
    age: '18–36 months',
    description: 'A nurturing environment where young children explore, play, and build early learning skills.',
    to: '/young-toddler/',
    Icon: ChildCareOutlinedIcon,
    iconClass: toddlerIcon,
  },
  {
    title: 'Preschool',
    age: '3–4 years',
    description: 'Play-based learning that promotes social, emotional, cognitive, and physical development.',
    to: '/preschool/',
    Icon: ExtensionOutlinedIcon,
    iconClass: preschoolIcon,
  },
  {
    title: 'Transitional Kindergarten & Kindergarten Readiness',
    age: '4–5 years',
    description: 'A learning environment that builds confidence and prepares children for a successful transition to kindergarten.',
    to: '/kindergarten-readiness/',
    Icon: MenuBookOutlinedIcon,
    iconClass: readinessIcon,
  },
]

const HomepagePrograms = () => (
  <section className={programsSection} aria-labelledby="programs-heading">
    <div className={programsIntro}>
      <h2 id="programs-heading">Our Programs</h2>
      <p>
        Age-appropriate programs with caring teachers, engaging curriculum,
        and a safe, nurturing environment.
      </p>
    </div>
    <div className={programGrid}>
      {programs.map(({ title, age, description, to, Icon, iconClass }) => (
        <article key={to} className={programCard}>
          <div className={`${programIcon} ${iconClass}`}>
            <Icon aria-hidden="true" />
          </div>
          <h3>{title}</h3>
          <p className={programAge}>{age}</p>
          <p className={programDescription}>{description}</p>
          <Link to={to} className={programButton} aria-label={`Learn more about ${title}`}>
            Learn More
          </Link>
        </article>
      ))}
    </div>
  </section>
)

export default HomepagePrograms
