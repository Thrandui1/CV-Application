import style from '@/scss/inputContainer.module.scss'

export function InputContainer({
  id,
  handleChange,
  label,
  type,
  value,
  onClick,
  onFocus
}) {

  if (type === "long-text") {
    return (
      <div className={style.inputContainer}>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          className={style.inputDescription}
          value={value ?? ""}
          onChange={handleChange}
        />
      </div>
    )
  }

  if (type === "file") {
    return (
      <div className={style.inputContainer}>
        <label className={style.label}>{label}</label>

        <input
          id={id}
          type="file"
          className={style.hiddenFileInput}
          onChange={handleChange}
          accept="image/*"
        />

        <label htmlFor={id} className={style.fileButton}>
          Выбрать файл
        </label>
      </div>
    )
  }

  return (
    <div className={style.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className={style.input}
        onChange={handleChange}
        onClick={onClick}
        onFocus={onFocus}
        value={value ?? ""}
        autoComplete="off"
      />
    </div>
  )
}
