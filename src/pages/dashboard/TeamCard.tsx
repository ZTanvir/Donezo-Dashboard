import Card from "./Card";
import type { User } from "../../types";
import Spinner from "../../components/Spinner";
import { FiPlus } from "react-icons/fi";

type TeamProps = {
  isLoading: boolean;
  teamsData: undefined | User[];
};

const TeamCard = ({ isLoading, teamsData }: TeamProps) => {
  if (isLoading || !teamsData) {
    return (
      <Card>
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      </Card>
    );
  }
  return (
    <Card>
      <section>
        <div className="mb-2 flex justify-between gap-2">
          <h3 className="text-xl font-bold text-gray-800">Users</h3>
          <button className="flex items-center gap-1 rounded-xl border border-green-900 px-2 py-1 text-green-900 hover:cursor-pointer">
            <span>
              <FiPlus />
            </span>
            <span>Add user</span>
          </button>
        </div>
        <div className="space-y-2">
          {teamsData.map((member) => (
            <div
              className="flex items-center justify-between gap-2"
              key={member.id}
            >
              <div>
                <p className="font-semibold text-gray-800">{member.name}</p>
                <p className="text-gray-400">Join date: {member.joinDate}</p>
              </div>
              <span
                className={`text-sm ${
                  member.status === "active"
                    ? "rounded-xl border border-green-900 bg-green-200 p-1 text-green-900"
                    : "rounded-xl border border-red-400 bg-red-100 p-1 text-red-400"
                } `}
              >
                {member.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
};
export default TeamCard;
