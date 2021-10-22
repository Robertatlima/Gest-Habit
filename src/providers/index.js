import { ActivitiesProvider } from "./Activities";
import { AuthProvider } from "./Auth";
import { GoalsProvider } from "./Goals";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { GroupsProvider } from "./Groups";
import { GroupIdProvider } from "./GroupId";
import { SubscribibleProvider } from "./Subscribible";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <GroupsProvider>
            <GroupIdProvider>
              <HabitsProvider>
                <GoalsProvider>
                  <ActivitiesProvider>
                    <SubscribibleProvider>{children}</SubscribibleProvider>
                  </ActivitiesProvider>
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
