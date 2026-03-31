import {
    updateState,
    deleteFromState,
} from "@/functions/functions"
import inputs from "@/scss/inputsWrapper.module.scss"
import style from "@/scss/modules/buttonStyle.module.scss"
import { InputContainer } from "@/components/LeftBlock/inputContainer/InputContainer"

export function PreviousWorkContainer({ side, work, data, setData }) {
    if (side === "left") {
        return (
            <div className={inputs.inputsWrapper}>
                <InputContainer
                    id="position"
                    value={work.position}
                    label="Должность"
                    type="text"
                    handleChange={(event) =>
                        updateState(event, "position", data, work, setData, "work")
                    } />
                <InputContainer
                    id="company"
                    value={work.company}
                    label="Организация"
                    type="text"
                    handleChange={(event) =>
                        updateState(event, "company", data, work, setData, "work")
                    } />
                <InputContainer
                    id="from"
                    value={work.from}
                    label="Период с"
                    type="date"
                    handleChange={(event) =>
                        updateState(event, "from", data, work, setData, "work")
                    } />
                <InputContainer
                    id="to"
                    value={work.to}
                    label="По"
                    type="date"
                    handleChange={(event) =>
                        updateState(event, "to", data, work, setData, "work")
                    } />
                <div className={style.buttonRow}>
                    <button
                        type="button"
                        className={style.button}
                        onClick={() => deleteFromState(work, data, setData, "work")}
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
