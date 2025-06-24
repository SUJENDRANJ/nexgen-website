import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VideoUpload() {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border dark:border-zinc-800">
      <h2 className="text-xl font-semibold mb-4">Upload New Worker Video</h2>
      <form className="space-y-4">
        <Input type="text" placeholder="Worker Name" />
        <Input type="file" accept="video/*" />
        <Input type="file" accept="audio/*" />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}
