import {
    updateState,
    deleteFromState,
} from "@/functions/functions"
import { InputContainer } from "@/components/LeftBlock/inputContainer/InputContainer"
import inputs from "@/scss/inputsWrapper.module.scss"
import style from "@/scss/modules/buttonStyle.module.scss"

export function UniversityContainer({ side, university, data, setData }) {
    if (side === "left") {
        return (
            <div className={inputs.inputsWrapper}>
                <InputContainer
                    id="universityName"
                    value={university.universityName}
                    label="Название университета"
                    type="text"
                    handleChange={(event) =>
                        updateState(event, "universityName", data, university, setData, "education")
                    } />
                <InputContainer
                    id="city"
                    value={university.city}
                    label="Город"
                    type="text"
                    handleChange={(event) =>
                        updateState(event, "city", data, university, setData, "education")
                    } />
                <InputContainer
                    id="speciality"
                    value={university.speciality}
                    label="Специальность"
                    type="text"
                    handleChange={(event) =>
                        updateState(event, "speciality", data, university, setData, "education")
                    } />
                <InputContainer
                    id="year"
                    value={university.yearEnding}
                    label="Год окончания"
                    type="text"
                    handleChange={(event) =>
                        updateState(event, "yearEnding", data, university, setData, "education")
                    } />
                <div className={style.buttonRow}>
                    <button
                        type="button"
                        className={style.button}
                        onClick={() => deleteFromState(university, data, setData, "education")}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        )
    }

    return (
        null
    )
}