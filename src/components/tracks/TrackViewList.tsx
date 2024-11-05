import { TrackItem } from "../../types/TracksType";
import TrackViewItem from "./TrackViewItem";

interface TrackViewListProps {
  topTracks: TrackItem[];
}

const TrackViewList = ({ topTracks }: TrackViewListProps) => {
  return (
    <div className=" flex flex-col py-3">
      {/* item song */}
      <TrackViewItem topTracks={topTracks} />
    </div>
  );
};

export default TrackViewList;
