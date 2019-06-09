import axios from "axios";

export default {
  fullProgram: () => {
    return axios.get("/workout/fullprogram");
  },
  programByWeek: week => {
    return axios.get("/workout/program_week/" + week);
  },
  programByDayAndWeek: (week, day) => {
    return axios.get("/workout/program_day/" + week + "/" + day);
  },
  exercisesByName: name => {
    return axios.get("/workout/fullprogram" + name);
  },
  exercisesByBodypart: bodypart => {
    return axios.get("/workout/fullprogram" + bodypart);
  }
};
