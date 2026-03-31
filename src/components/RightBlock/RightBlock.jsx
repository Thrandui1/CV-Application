import styles from './rightBlock.module.scss'
import { PersonalData } from './PersonalData/PersonalData.jsx'
import { GeneralInformation } from './GeneralInformation/GeneralInformation.jsx'
import { Divider } from '../LeftBlock/settingsBlock/Divider'

export function RightBlock({ data }) {
    return (
            <div className={styles.rightBlock}>
                <div className={styles.infoPdf}>
                    <div className={styles.leftPdf}>
                        <PersonalData personalData={data.personalInfo} />
                    </div>
                    <Divider />
                    <div className={styles.rightPdf}>
                        <GeneralInformation
                            experience={data.experience}
                            education={data.education}
                        />
                    </div>
                </div>
            </div>
    )
}