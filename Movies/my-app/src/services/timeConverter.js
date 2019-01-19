import moment from "moment";
const timeConvert = string => {
  const date = moment.duration(+string, "minutes");
  const hours = date._data.hours;
  const minutes = date._data.minutes;
  return `${hours}ч. ${minutes}мин.`;
};

export default timeConvert;
