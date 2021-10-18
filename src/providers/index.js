import { ActivitiesProvider } from "./Activities";
import { AuthProvider } from "./Auth";
import { GoalsProvider } from "./Goals";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <HabitsProvider>
            <GoalsProvider>
              <ActivitiesProvider>{children}</ActivitiesProvider>
            </GoalsProvider>
          </HabitsProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
