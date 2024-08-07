import { Task } from "../components/Task";

const HomePage = () => {
  const tasks = [
    {
      id: 1,
      title: "Task in Progress",
      description: "",
      icon: "alarm",
      status: undefined,
    },
    {
      id: 2,
      title: "Task Completed",
      description: "",
      icon: "exercise",
      status: undefined,
    },
    {
      id: 3,
      title: "Task Won’t Do",
      description: "",
      icon: "exercise",
      status: undefined,
    },
    {
      id: 4,
      title: "Task To Do",
      description: "Work on a challenge on devChallenges.io, learn TypeScript",
      icon: "exercise",
      status: undefined,
    },
  ];

  return (
    <main className="">
      <section>
        <div className="flex items-center gap-3">
          <i className="main-icon" />
          <h1 className="font-normal text-40">My Task Board</h1>
          <i className="edit-icon" />
        </div>
        <h2 className="font-light pl-14">Tasks to keep organised</h2>
      </section>
      <section>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </section>
    </main>
  );
};
export { HomePage };
