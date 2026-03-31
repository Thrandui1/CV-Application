export function updateState(
  { target: { value } },
  attr,
  data,
  object,
  setData,
  category
) {
  const part = category === 'work' ? 'experience' : 'education';

  const result = [...data[part]].map((obj) =>
    obj.id === object.id
      ? { ...object, [attr]: value }
      : obj
  );

  setData({ ...data, [part]: result });
}

export function deleteFromState(obj, data, setData, category) {
  const key = category === 'work' ? 'experience' : 'education';

  const updated = data[key].filter(item => item.id !== obj.id);

  setData({...data, [key]: updated});
}

export function addToState(data, setData, category) {
  const work = {
    id: crypto.randomUUID(),
    position: '',
    company: '',
    from: '',
    to: '',
  };

  const university = {
    id: crypto.randomUUID(),
    universityName: '',
    city: '',
    speciality: '',
    year: '',
  };

  if (category === 'work') {
    const experience = [...data.experience, work];
    setData({ ...data, experience });
    return;
  }

  const education = [...data.education, university];
  setData({ ...data, education });
}