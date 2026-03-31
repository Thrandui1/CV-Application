import category from '@/scss/inputCategory.module.scss'
import inputs from '@/scss/inputsWrapper.module.scss'
import buttonStyle from '@/scss/modules/buttonStyle.module.scss'
import { PreviousWorkContainer } from './previousWorkContainer/PreviousWorkContainer'
import { addToState } from '@/functions/functions'

export function Experience({ data, setData }) {
    return (
        <div className={category.inputCategory}>
            <div className={category.title}>Опыт работы</div>
            <div className={inputs.inputsWrapper}>
                {data.experience.map((work) => (
                    <PreviousWorkContainer
                        side={"left"}
                        data={data}
                        setData={setData}
                        key={work.id}
                        work={work}
                    />
                ))}
            </div>
            <div className={buttonStyle.buttonWrapper}>
                <button
                    type="button"
                    className={buttonStyle.buttonExp}
                    onClick={() => addToState(data, setData, "work")}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}