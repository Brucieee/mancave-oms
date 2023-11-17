import { Badge } from "../components/badge";
import { Wifi } from "lucide-react";

export const SystemStatus = ({ connected }: { connected: boolean }) => (
  <Badge
    variant="outline"
    className="mx-auto mb-2 mt-auto w-fit p-1 px-5 text-center"
  >
    {connected ? (
      <>
        <Wifi className="mr-2" size={20} color="#4fff38" />
        All systems normal
      </>
    ) : (
      <>
        <Wifi className="mr-2" size={20} color="#ff3838" />
        System downtime
      </>
    )}
  </Badge>
);