import { InputContainer } from '@/components/LeftBlock/inputContainer/InputContainer.jsx';
import category from '@/scss/inputCategory.module.scss'
import inputs from '@/scss/inputsWrapper.module.scss'

export function PersonalInfo({ data, setData }) {
    const { personalInfo } = data;

    return (
        <div className={category.inputCategory}>
            <div className={category.title}>Персональная информация</div>
            <div className={inputs.inputsWrapper}>
                <InputContainer
                    id="surname"
                    value={personalInfo.surname}
                    label="Фамилия"
                    type='text'
                    handleChange={(event) => {
                        setData({ ...data, personalInfo: { ...personalInfo, surname: event.target.value } })
                    }}>
                </InputContainer>
                <InputContainer
                    id="name"
                    value={personalInfo.name}
                    label="Имя"
                    type='text'
                    handleChange={(event) => {
                        setData({ ...data, personalInfo: { ...personalInfo, name: event.target.value } })
                    }}>
                </InputContainer>
                <InputContainer
                    id="patronymic"
                    value={personalInfo.patronymic}
                    label="Отчество"
                    type='text'
                    handleChange={(event) => {
                        setData({ ...data, personalInfo: { ...personalInfo, patronymic: event.target.value } })
                    }}>
                </InputContainer>
                <InputContainer
                    id="dob"
                    value={personalInfo.dob}
                    label="Дата рождения"
                    type='date'
                    onClick={(e) => e.target.showPicker?.()}
                    onFocus={(e) => e.target.showPicker?.()}
                    handleChange={(event) => {
                        setData({ ...data, personalInfo: { ...personalInfo, dob: event.target.value } })
                    }}>
                </InputContainer>
                <InputContainer
                    id="email"
                    value={personalInfo.email}
                    label="Электронная почта"
                    type='email'
                    handleChange={(event) => {
                        setData({ ...data, personalInfo: { ...personalInfo, email: event.target.value } })
                    }}>
                </InputContainer>
                <InputContainer
                    id="phone"
                    value={personalInfo.phone}
                    label="Номер телефона"
                    type='tel'
                    handleChange={(event) => {
                        setData({ ...data, personalInfo: { ...personalInfo, phone: event.target.value } })
                    }}>
                </InputContainer>
                <InputContainer
                    id="photo"
                    label="Загрузить фото"
                    type="file"
                    handleChange={(event) => {
                        const file = event.target.files?.[0];
                        if (!file) return;

                        const imageUrl = URL.createObjectURL(file);

                        setData({ ...data,personalInfo: {...personalInfo, photo: imageUrl } })
                    }}>
                </InputContainer>
        </div>
        </div >
    )
}