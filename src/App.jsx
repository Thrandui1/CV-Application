import { useState } from 'react'
import { Header } from '@/components/Header/Header.jsx'
import { Settings } from '@/components/LeftBlock/settingsBlock/Settings'
import { RightBlock } from '@/components/RightBlock/RightBlock.jsx'
import styles from '@/app.module.scss'
import "@/global.scss"
import profileImg from '../public/images/photo.png'

function App() {
  const [data, setData] = useState({
    personalInfo: {
      surname: "",
      name: "",
      patronymic: "",
      dob: "",
      photo: profileImg,
      phone: "",
      email: "",
    },
    experience: [
      {
        id: crypto.randomUUID(),
        position: "",
        company: "",
        from: "",
        to: "",
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        universityName: "",
        city: "",
        speciality: "",
        yearEnding: "",
      },
    ],
  });

  return (
    <div className={styles.app}>
      <Header></Header>
      <div className={styles.main}>
        <Settings data={data} setData={setData}></Settings>
        <RightBlock data={data}></RightBlock>
      </div>
    </div>
  )
}

export default App
