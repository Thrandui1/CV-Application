function formatPhone(value) {
  if (!value) return "";

  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = "7" + digits.slice(1);
  }

  if (!digits.startsWith("7")) {
    digits = "7" + digits;
  }

  digits = digits.slice(0, 11);

  return `+7(${digits.slice(1, 4)})-${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}

export function PhoneText({ value, className }) {
  return <span className={className}>{formatPhone(value)}</span>;
}