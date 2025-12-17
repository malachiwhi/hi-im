import { Redirect } from 'expo-router';

export default function Index() {
  //App entry point
  // Redirect to the onboarding setup-profile screen
  return <Redirect href="/(onboarding)/setup-profile" />;
}
