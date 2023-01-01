const dateFillter = (d: string | undefined) => {
  const date = d;
  return date?.replace("T", " ").substring(0, date.indexOf("."));
};

export default dateFillter;
