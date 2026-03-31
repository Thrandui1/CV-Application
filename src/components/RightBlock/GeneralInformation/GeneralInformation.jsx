import styles from './generalInformation.module.scss'
import BriefcaseIcon from '@/assets/briefcase.svg?react'
import BookIcon from '@/assets/book.svg?react'

const formatDate = (date) =>
    date && date.split('-').reverse().join('.')

const Row = ({ label, value }) =>
    value ? (
        <div className={styles.row}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    ) : null

export function GeneralInformation({ experience = [], education = [] }) {
    if (!experience.length && !education.length) return null

    return (
        <div className={styles.generalInformation}>
            {experience.length > 0 && (
                <div className={styles.experiencePdf}>
                    <div className={styles.title}>
                        <BriefcaseIcon className={styles.icon} />
                        <span>ОПЫТ РАБОТЫ</span>
                    </div>

                    <div className={styles.experienceContent}>
                        {experience.map(item => (
                            <div key={item.id} className={styles.experienceItem}>
                                <div className={styles.newString}>
                                    <Row label="Должность:" value={item.position} />
                                    <Row label="Организация:" value={item.company} />

                                    {(item.from || item.to) && (
                                        <div className={styles.row}>
                                            <span className={styles.label}>Период:</span>
                                            <span className={styles.value}>
                                                {formatDate(item.from)}
                                                {item.to && ` — ${formatDate(item.to)}`}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {education.length > 0 && (
                <div className={styles.educationPdf}>
                    <div className={styles.title}>
                        <BookIcon className={styles.icon} />
                        <span>ОБРАЗОВАНИЕ</span>
                    </div>
                    <div className={styles.educationContent}>
                        {education.map(item => (
                            <div key={item.id} className={styles.educationItem}>
                                <div className={styles.newString}>
                                    <Row label="Название университета:" value={item.universityName} />
                                    <Row label="Город:" value={item.city} />
                                    <Row label="Специальность:" value={item.speciality} />
                                    <Row label="Год окончания:" value={item.yearEnding} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}