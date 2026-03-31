import styles from './personalData.module.scss'
import EmailIcon from '@/assets/envelope.svg?react'
import ViberIcon from '@/assets/viber.svg?react'
import WhatsappIcon from '@/assets/whatsapp.svg?react'
import TelegramIcon from '@/assets/telegram.svg?react'
import { PhoneText } from "@/components/RightBlock/PhoneInput/PhoneInput";

export function PersonalData({ personalData }) {
    return (
        <div className={styles.personalData}>
            <div className={styles.imageContainer}>
                <img src={personalData.photo} alt="" />
            </div>
            <div className={styles.personalInformation}>
                <div className={styles.fullName}>
                    {personalData.surname}<br />{personalData.name}<br />{personalData.patronymic}
                </div>
                <div className={styles.dob}>
                    {personalData.dob && personalData.dob.split('-').reverse().join('.')}
                </div>
                <div className={styles.emailContainer}>
                    <EmailIcon className={styles.icon} />
                    <span>{personalData.email}</span>
                </div>
                <div className={styles.numberContainer}>
                    <div className={styles.widget}>
                        <ViberIcon className={styles.icon} />
                        <WhatsappIcon className={styles.icon} />
                        <TelegramIcon className={styles.icon} />
                    </div>
                    <PhoneText
                        value={personalData.phone}
                        className={styles.number}
                    />
                </div>
            </div>
        </div>
    )
}