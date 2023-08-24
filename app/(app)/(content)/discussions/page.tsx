'use client';
import { CreateDiscussion } from './components/CreateDiscussion';
import { DiscussionsList } from './components/DiscussionsList';

export default function Page() {
  return (
    <>
      <div className="flex justify-end">
        <CreateDiscussion />
      </div>
      <div className="mt-4">
        <DiscussionsList />
      </div>
    </>
  );
}