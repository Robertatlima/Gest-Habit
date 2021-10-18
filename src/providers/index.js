import { AuthProvider } from "./Auth";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <GroupsProvider>
            <HabitsProvider>{children}</HabitsProvider>
          </GroupsProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
