import { AuthProvider } from "./Auth";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
