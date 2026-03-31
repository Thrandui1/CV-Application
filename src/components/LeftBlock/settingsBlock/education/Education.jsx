import category from '@/scss/inputCategory.module.scss'
import inputs from '@/scss/inputsWrapper.module.scss'
import buttonStyle from '@/scss/modules/buttonStyle.module.scss'
import { UniversityContainer } from './universityContainer/UniversityContainer'
import { addToState } from '@/functions/functions'

export function Education({ data, setData }) {
    return (
        <div className={category.inputCategory}>
            <div className={category.title}>Образование</div>
            <div className={inputs.inputsWrapper}>
                {data.education.map((university) => (
                    <UniversityContainer
                        side={"left"}
                        data={data}
                        setData={setData}
                        key={university.id}
                        university={university}
                    />
                ))}
            </div>
            <div className={buttonStyle.buttonWrapper}>
                <button
                    type="button"
                    className={buttonStyle.buttonExp}
                    onClick={() => addToState(data, setData, "education")}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}