import {
  Categories,
  DiscoverMore,
  Hero,
  NFTCountDown,
  TopCreators,
  TrendingCollection,
  WeeklyDigest,
  WorkFlow,
} from '@/components/Home';

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <Categories />
      <DiscoverMore />
      <NFTCountDown />
      <WorkFlow />
      <WeeklyDigest />
    </>
  );
}
