export const shortForm = (id:string) => {
  console.log(id, 'ID')
  if (!id)
    return ""
    const first5 = id.slice(0, 5);
    const last5 = id.slice(-5);
    return `${first5}...${last5}`;
  };