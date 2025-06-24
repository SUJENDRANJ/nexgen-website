import { Card, CardContent } from "@/components/ui/card";

const workers = [
  { name: "Priya", video: "worker1.mp4", audio: "worker1.mp3" },
  { name: "Kumar", video: "worker2.mp4", audio: "worker2.mp3" },
];

export default function WorkerTable() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">All Worker Videos</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b dark:border-zinc-700">
              <th className="py-2">Name</th>
              <th>Video File</th>
              <th>Audio File</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker, i) => (
              <tr key={i} className="border-b dark:border-zinc-800">
                <td className="py-2">{worker.name}</td>
                <td>{worker.video}</td>
                <td>{worker.audio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
