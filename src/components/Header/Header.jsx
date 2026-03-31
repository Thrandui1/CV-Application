import styles from "@/components/Header/header.module.scss";

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Создать резюме</div>
            <button
                type="button"
                className={styles.button}
                onClick={() => window.print()}
            >
                Создать PDF
            </button>
        </div>
    )
}