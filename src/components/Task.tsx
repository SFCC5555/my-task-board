import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CoffeeIcon from "@mui/icons-material/Coffee";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const Task = ({ task }) => {
  const icons = {
    working: <LaptopMacIcon />,
    thinking: <PsychologyIcon />,
    coffee: <CoffeeIcon />,
    exercise: <FitnessCenterIcon />,
    books: <LibraryBooksIcon />,
    alarm: <AccessAlarmIcon />,
  };
  return (
    <div className="flex flex-col items-center justify-between p-3 rounded-lg border gap-3">
      <div className="flex items-center justify-between gap-3" >
        <div className="flex items-center gap-3" >
          {icons[task.icon]}
          <h3>{task.title}</h3>
        </div>
        <i className="" />
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export { Task };
