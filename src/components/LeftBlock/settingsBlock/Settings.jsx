import styles from './settings.module.scss'
import { PersonalInfo } from './personalInfo/PersonalInfo'
import { Experience  } from './experience/Experience'
import { Education } from './education/Education'
import { Divider } from './Divider'


export function Settings({data, setData}) {
    return (
        <div className={styles.settingsBlock}>

            <div className={styles.settings}>
                <PersonalInfo data={data} setData={setData}></PersonalInfo>
                <Divider />
                <Experience  data={data} setData={setData}></Experience>
                <Divider />
                <Education data ={data} setData={setData}></Education>
            </div>

        </div>
    )
}