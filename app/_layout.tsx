import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(tabs)/index">
        <Icon sf="house.fill" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(tabs)/match">
        <Icon sf="heart.fill" />
        <Label>Match</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(tabs)/chat">
        <Icon sf="bubble.left.and.bubble.right.fill" />
        <Label>Chat</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(tabs)/explore">
        <Icon sf="magnifyingglass" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(tabs)/profile">
        <Icon sf="person.fill" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}