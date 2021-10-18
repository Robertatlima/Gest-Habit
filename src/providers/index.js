import { ActivitiesProvider } from "./Activities";
import { AuthProvider } from "./Auth";
import { GoalsProvider } from "./Goals";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { GroupsProvider } from "./Groups";
import { GroupIdProvider } from "./GroupId";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <GroupsProvider>
            <GroupIdProvider>
              <HabitsProvider>
                <GoalsProvider>
                  <ActivitiesProvider>{children}</ActivitiesProvider>
                </GoalsProvider>
              </HabitsProvider>
            </GroupIdProvider>
          </GroupsProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
