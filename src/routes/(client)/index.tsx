import { FuturedPostItem, ImageSidePost, NoImagePost, SkeletonPost } from "~/components/PostItem";

export default function Home() {
  return <>
    <div class="flex flex-col gap-8">
      <FuturedPostItem />
      <ImageSidePost />
      <NoImagePost />
      <SkeletonPost />
    </div>
  </>;
}
